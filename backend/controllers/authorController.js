import Author from "../model/Author.js";

const fetchAuthors = async (req, res) => {
  const authors = await Author.find({});
  res.send(authors);

  return await authors.json();
};

export { fetchAuthors };
