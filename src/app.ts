import express, { json } from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(json());
app.use(cors());

app.get("/health", (req: Request, res: Response) => {
  res.send("Ok");
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Running in port ${port}`));
