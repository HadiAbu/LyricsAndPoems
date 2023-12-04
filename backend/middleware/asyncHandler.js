// to avoid typing out all the try catch blocks, this way, we don't have to
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next).catch(next));
};
export default asyncHandler;
