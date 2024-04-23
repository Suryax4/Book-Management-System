import Book from "../models/book.model.js";

// Create a new book entry
export const createBookEntry = async (req, res) => {
  try {
    const { title, author, publicationYear } = req.body;

    if (!title || !author || !publicationYear) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    const existingBook = await Book.findOne({ title });
    if (existingBook) {
      return res.status(400).json({
        success: false,
        message: "Book with the same title already exists",
      });
    }
    const book = new Book({ title, author, publicationYear });
    await book.save();

    res
      .status(201)
      .json({ success: true, message: "Book Entry Created Successfull", book });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Create Book Entry ",
      error: error.message,
    });
  }
};

// Get all books entry
export const getAllEntry = async (req, res) => {
  try {
    const books = await Book.find();

    res
      .status(201)
      .json({ success: true, message: "Books fetched successfully", books });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch Book Entries",
      error: error.message,
    });
  }
};

// Update a book entry
export const updateBookEntry = async (req, res) => {
  const { id } = req.params;
  const { title, author, publicationYear } = req.body;
  try {
    const existingBook = await Book.findById(id);
    if (!existingBook) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }

    existingBook.title = title;
    existingBook.author = author;
    existingBook.publicationYear = publicationYear;
    existingBook.updatedAt = Date.now();

    const updatedBook = await existingBook.save();

    res.status(200).json({
      success: true,
      message: "Book Updated successfully",
      book: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update book",
      error: error.message,
    });
  }
};

// Delete a book entry
export const deleteBookEntry = async (req, res) => {
  const { id } = req.params;

  try {
    const existingBook = await Book.findById(id);
    if (!existingBook) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }

    await Book.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Book Entry Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete book",
      error: error.message,
    });
  }
};

// Get Filtered Book Entries
export const getFilteredBooks = async (req, res) => {
  try {
    let query = {};

    if (req.query.author) {
      query.author = req.query.author;
    }

    if (req.query.publicationYear) {
      query.publicationYear = req.query.publicationYear;
    }

    const books = await Book.find(query);
    res.status(200).json({
      success: true,
      message: "Filtered books fetched successfully",
      books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch filtered books",
      error: error.message,
    });
  }
};
