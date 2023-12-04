import Author from "../model/Author.js";

//to be used as a API for the frontend
const fetchAuthors = async (req, res) => {
  try {
    const authors = await Author.find({});
    res.send(authors);
    return authors;
  } catch (e) {
    console.log(e.message);
    // return authors;
  }
};
const getAuthor = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const author = await Author.find({ _id: { $eq: id } });
  res.send(author);
  // return author;
  // return await authors.json();
};
const updateAuthor = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const authors = await Author.find({});
  res.send(authors);

  return await authors.json();
};
//to be used within the server
const getAllAuthors = async (req, res) => {
  const authors = await Author.find({});
  return authors;
};

export { getAuthor, getAllAuthors, updateAuthor, fetchAuthors };
