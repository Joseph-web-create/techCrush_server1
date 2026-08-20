import express from "express";

const app = express();
const port = 5025;

app.use(express.json());

// Home route
app.get("/home", (req, res) => {
  res.status(200).json({ message: "Welcome to the home page" });
});

// Contact us route
app.get("/contact-us", (req, res) => {
  res.status(200).json({ message: "Contact us" });
});

// About route
app.get("/about", (req, res) => {
  res.status(200).json({ message: "about us" });
});

// Start Server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
