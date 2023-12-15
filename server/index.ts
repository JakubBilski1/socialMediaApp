import express, { Express } from 'express';
import authRoute from './routes/authRoute';

const app: Express = express();
const port: number = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});