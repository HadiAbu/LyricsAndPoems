import express from "express";
import { fetchAuthors } from "../controllers/authorController.js";

const router = express.Router();

router.get("allAuthors", fetchAuthors);

export default router;
