import { Response, Request } from "express";
import Book from "../model/book";

// getting all books

export const getAll = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    if (!books) {
      return res.status(400).json({ error: "cannot fetch all books" });
    }

    return res
      .status(200)
      .json({ data: books, message: "Books gotten succesfully!" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book) {
      return res
        .status(400)
        .json({ error: `cannot find the book with the id ${id}` });
    }

    return res
      .status(200)
      .json({ data: book, message: "Book gotten successfully!" });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

export const addBook = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: "all fields are mandatory" });
    }
    const book = await Book.create({
      title,
      description,
    });

    if (!book) {
      return res.status(400).json({ error: "cannot create new book" });
    }

    return res
      .status(200)
      .json({ data: book, message: "book created successfully!" });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: "all fields are mandatory" });
    }

    const book = await Book.findByIdAndUpdate(id, req.body);

    if (!book) {
      return res
        .status(400)
        .json({ error: `cannot update the book with the id ${id}` });
    }

    const updatedBook = await Book.findById(id);

    return res
      .status(200)
      .json({ data: updatedBook, message: "book updated successfully" });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res
        .status(400)
        .json({ error: `cannot delete the book with the id ${id}` });
    }
    return res.status(200).json({ message: "book deleted successfully" });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};
