export default defineEventHandler(async (event) => {
  const date = new Date();
  console.log("Return on the Server Side!", date.toLocaleString());
  return {
    message: `Hello, returned from server at`,
    date: date.toISOString(),
  };
});
