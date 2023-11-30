import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import connectDB from "./db.js";
import authorRoutes from "./routes/authorRoutes.js";

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
app.use("/api/authors/allAuthors", authorRoutes);

app.get("/", async (req, res) => {
  res.send("hello form within server");
  try {
    const response = await fetch("/api/authors/allAuthors");
    console.log(await response.json());
  } catch (e) {
    console.log(e.message);
  }

  // console.log(typeof app);
});

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server is listening on port: ${process.env.PORT}`);
});
