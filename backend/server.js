const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const app = express();
const userRoutes = require("./routes/userRoutes.js");
const connectDB = require("./config/db.js");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running ..");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`server started on Port ${PORT}`));
