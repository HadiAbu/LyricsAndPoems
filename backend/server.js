import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import connectDB from "./db.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello form within server");
  console.log(typeof app);
});

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server is listening on port: ${process.env.PORT}`);
});
