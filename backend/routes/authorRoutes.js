import express from "express";
import {
  getAuthor,
  updateAuthor,
  fetchAuthors,
} from "../controllers/authorController.js";

const router = express.Router();

router.get("/all-authors", fetchAuthors);
router.get("/author/:id", getAuthor);
router.put("/author/:id", updateAuthor);

export default router;
