import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRouter from "./routes/book.route.js";
import authRouter from "./routes/auth.route.js";
import cors from "cors";

dotenv.config();

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const PORT = process.eventNames.PORT || 3000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});

app.use("/api/book", bookRouter);
app.use("/api/auth", authRouter);
