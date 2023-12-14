const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require('./routes/todoRoutes');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT

const corsOption = {
  origin: 'http://localhost:5173', credentials: true,
}

app.use(cors(corsOption));
app.use(express.json({ limit: "25mb", extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// test connection with server
app.get("/test", (req, res) => {
  res.json({ message: "API works." });
});

app.use('/todo', todoRoutes);

const start = async () => {
  await mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: false,
    })
    .then(() => console.log("Connected Database"))
    .catch((error) => console.log(error));

  app.listen(PORT, () => {
    console.log(`SERVER is running @PORT: `,PORT );
  });
};

start();