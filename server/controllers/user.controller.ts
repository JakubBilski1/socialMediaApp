import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getUserData = async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user?.userId as number | undefined,
        },
        select: {
            id: true,
            email: true,
            username: true,
            createdAt: true,
            updatedAt: true,
        },
    });

    return res.status(200).json({ user });
}

export {
    getUserData
}