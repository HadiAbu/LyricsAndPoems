import Song from "../model/Song.js";
import asyncHandler from "../middleware/asyncHandler.js";

//to be used as a API for the frontend
const fetchSongs = asyncHandler(async (req, res) => {
  const songs = await Song.find({});
  if (songs) {
    res.json(songs);
  } else {
    res.status(404).send("Songs not found!");
  }
});

const getSongById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const song = await Song.find({ _id: { $eq: id } });
  if (song) {
    res.json(song);
  } else {
    res.status(404).send("Song not found!");
  }
});

const updateSong = asyncHandler(async (req, res) => {
  const { id: objectId } = req.params;
  const updatedData = req.body;
  try {
    // Find and update the object in the database
    const updatedSong = await Song.findByIdAndUpdate(objectId, updatedData, {
      new: true,
    });

    if (updatedSong) {
      res.json({
        success: true,
        message: "Song updated successfully",
        data: updatedSong,
      });
    } else {
      res.status(404).json({ success: false, message: "Song not found" });
    }
  } catch (error) {
    console.error("Error updating Song:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

//to be used within the server
const getAllSongs = asyncHandler(async (req, res) => {
  const songs = await Song.find({});
  return songs;
});

export { getSongById, getAllSongs, updateSong, fetchSongs };
