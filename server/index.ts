import express, { Express } from 'express';
import authRoute from './routes/authRoute';
import userRoute from './routes/userRoute';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const port: number = 8000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));

app.use("/auth", authRoute);
app.use("/u", userRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});