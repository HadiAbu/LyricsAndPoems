import mongoose from "mongoose";
const Schema = mongoose.Schema;
const SongSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Author",
    },
  },
  {
    timestamps: true,
  }
);

const Song = mongoose.model("Song", SongSchema);

export default Song;
// export { SongSchema };
