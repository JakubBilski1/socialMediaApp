import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();

const login = async(req: Request, res: Response) => {
    try{
        const { email, password } = req.body;
        const userData = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if(!userData) return res.status(400).json({ message: 'Incorrect email.' });
        const userPassword = userData.password;
        const validPassword = await argon2.verify(userPassword, password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Incorrect password.' });
        }

        if(!process.env.ACCESS_TOKEN_SECRET) return res.status(500).json({ message: 'Server error' });

        const accessToken = jwt.sign(
            { userId: userData.id },
            process.env.ACCESS_TOKEN_SECRET!,
            {
                expiresIn: "1d",
            }
        );
        
        res.cookie("token", accessToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24,
            sameSite: "lax",
            path: "/",
        });

        res.status(200).json({ message: 'Login successful' });
    }
    catch(err: any){
        return res.status(500).json({ error: err.message });
    }
};

const register = async(req: Request, res: Response) => {
    try{
        const { email, password, username } = req.body;

        if (!email || !password || !username) {
            return res.status(400).json({ message: 'Wszystkie pola są wymagane.' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Nieprawidłowy adres email.' });
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({
            message: 'Hasło musi mieć co najmniej 8 znaków i zawierać co najmniej jedną dużą literę, jedną małą literę i jedną cyfrę.'
            });
        }

        if (username.length < 3) {
            return res.status(400).json({ message: 'Nazwa użytkownika musi mieć co najmniej 3 znaki.' });
        }

        const hashedPassword = await argon2.hash(password);

        const existingEmail = await prisma.user.findUnique({
            where: {
                email
            }
        });
        const existingUser = await prisma.user.findUnique({
            where: {
                username
            }
        });
        if (existingEmail) {
            return res.status(400).json({ message: 'Użytkownik o podanym adresie email już istnieje.' });
        }
        if (existingUser) {
            return res.status(400).json({ message: 'Użytkownik o podanej nazwie już istnieje.' });
        }

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                username
            }
        });
        console.log(newUser)

        res.status(200).json({ message: 'Rejestracja przebiegła pomyślnie.' });
    }catch(err: any){  
        return res.status(500).json({ error: err.message });
    }
}

export {
    login,
    register
}