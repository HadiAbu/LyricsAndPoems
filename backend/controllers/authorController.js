import Author from "../model/Author.js";
import asyncHandler from "../middleware/asyncHandler.js";
//to be used as a API for the frontend
const fetchAuthors = asyncHandler(async (req, res) => {
  const authors = await Author.find({});
  if (authors) {
    res.json(authors);
  }
  res.status(404).send("Author not found!");
});

const getAuthorById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const author = await Author.find({ _id: { $eq: id } });
  if (author) {
    res.json(author);
  }
  res.status(404).send("Author not found!");
});

const updateAuthor = asyncHandler(async (req, res) => {
  const { id: objectId } = req.params;
  const updatedData = req.body;
  console.log(req.body);
  console.log(req.params);
  try {
    // Find and update the object in the database
    const updatedAuthor = await Author.findByIdAndUpdate(
      objectId,
      updatedData,
      { new: true }
    );

    if (updatedAuthor) {
      res.json({
        success: true,
        message: "Author updated successfully",
        data: updatedAuthor,
      });
    } else {
      res.status(404).json({ success: false, message: "Author not found" });
    }
  } catch (error) {
    console.error("Error updating Author:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

//to be used within the server
const getAllAuthors = asyncHandler(async (req, res) => {
  const authors = await Author.find({});
  return authors;
});

export { getAuthorById, getAllAuthors, updateAuthor, fetchAuthors };
