import express from "express";
import {
  getAuthorById,
  updateAuthor,
  fetchAuthors,
} from "../controllers/authorController.js";

const router = express.Router();

router.route("/").get(fetchAuthors);
router.route("/:id").get(getAuthorById).put(updateAuthor);

export default router;
