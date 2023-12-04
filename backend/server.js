import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import connectDB from "./db.js";
import authorRoutes from "./routes/authorRoutes.js";
import Author from "./model/Author.js";
import { getAllAuthors, fetchAuthors } from "./controllers/authorController.js";

dotenv.config();
connectDB();

const app = express();

// cors
//
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use("/api/authors", authorRoutes);
//654bb1d9635d2f1efad35e7a
app.get("/", async (req, res) => {
  // res.send("hello form within server");
  try {
    const authors = await getAllAuthors();
    const authorNames = authors.map((auth) => auth.name);
    console.log(authorNames);
    res.status(200).send(authorNames);
  } catch (e) {
    console.log("error");
    console.log(e);
  }

  // console.log(typeof app);
});

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server is listening on port: ${process.env.PORT}`);
});
