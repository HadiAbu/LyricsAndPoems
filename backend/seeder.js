import dotenv from "dotenv";
import connectDB from "./db.js";
import Author from "./model/Author.js";
import Song from "./model/Song.js";
import authors from "./data/authors.js";
import songs from "./data/songs.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Author.deleteMany();
    await Song.deleteMany();

    const createdAuthors = await Author.insertMany(authors);

    const songsByAuthors = songs.map((song, i) => {
      return { ...song, author: createdAuthors[i] };
    });
    await Song.insertMany(songsByAuthors);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
const destroyData = async () => {};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
