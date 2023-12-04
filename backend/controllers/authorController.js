import Author from "../model/Author.js";
import asyncHandler from "../middleware/asyncHandler.js";
//to be used as a API for the frontend
const fetchAuthors = asyncHandler(async (req, res) => {
  const authors = await Author.find({});
  res.send(authors);
  return authors;
});

const getAuthorById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const author = await Author.find({ _id: { $eq: id } });
  res.send(author);
  return author;
});

const updateAuthor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  author.age = 31;
  res.send(author);
});

//to be used within the server
const getAllAuthors = asyncHandler(async (req, res) => {
  const authors = await Author.find({});
  return authors;
});

export { getAuthorById, getAllAuthors, updateAuthor, fetchAuthors };
