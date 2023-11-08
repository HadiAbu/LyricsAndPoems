import mongoose from "mongoose";
import { SongSchema } from "./Song.js";

const Schema = mongoose.Schema;
const AuthorSchema = new Schema(
  {
    name: { type: String, required: true },
    songs: { type: [SongSchema] },
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("Author", AuthorSchema);

export default Author;
