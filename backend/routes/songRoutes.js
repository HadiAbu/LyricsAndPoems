import express from "express";
import {
  getSongById,
  updateSong,
  fetchSongs,
} from "../controllers/songController.js";

const router = express.Router();

router.route("/").get(fetchSongs);
router.route("/:id").get(getSongById);
router.route("/:id").put(updateSong);

export default router;
