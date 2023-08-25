import express from "express";
import { Application } from "express";
import dotenv from "dotenv";
import connectDb from "./config/db";
import router from "./routes/bookRoute";
dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/book", router);

connectDb();

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`Server is running on Port ${Port}`);
});
