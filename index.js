import express from "express";

const app = express();
const port = 5025;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});

app.get("/home", (req, res) => {
  res.status(200).json({ message: "Welcome to the home page" });
});

app.get("/contact-us", (req, res) => {
  res.status(200).json({ message: "Contact us" });
});

app.get("/about", (req, res) => {
  res.status(200).json({ message: "about us" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
