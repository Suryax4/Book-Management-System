import express from "express";
import {
  getAllEntry,
  createBookEntry,
  updateBookEntry,
  deleteBookEntry,
  getFilteredBooks,
} from "../controllers/book.controller.js";
import { authenticate } from "../utils/middleware.js";

const router = express.Router();

router.post("/createEntry", authenticate, createBookEntry);
router.get("/getAllEntry", authenticate, getAllEntry);
router.put("/updateEntry/:id", authenticate, updateBookEntry);
router.delete("/deleteEntry/:id", authenticate, deleteBookEntry);
router.get("/filterEntry", authenticate, getFilteredBooks);

export default router;
