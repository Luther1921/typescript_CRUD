"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.addBook = exports.getOne = exports.getAll = void 0;
const book_1 = __importDefault(require("../model/book"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield book_1.default.find();
        if (!books) {
            return res.status(400).json({ error: "cannot fetch all books" });
        }
        return res
            .status(200)
            .json({ data: books, message: "Books gotten succesfully!" });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield book_1.default.findById(id);
        if (!book) {
            return res
                .status(400)
                .json({ error: `cannot find the book with the id ${id}` });
        }
        return res.status(200).json({ message: "Book gotten successfully!" });
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.getOne = getOne;
const addBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ error: "all fields are mandatory" });
        }
        const book = yield book_1.default.create();
        if (!book) {
            return res.status(400).json({ error: "cannot create new book" });
        }
        return res
            .status(200)
            .json({ data: book, message: "book created successfully!" });
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.addBook = addBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ error: "all fields are mandatory" });
        }
        const book = yield book_1.default.findByIdAndUpdate(id);
        if (!book) {
            return res
                .status(400)
                .json({ error: `cannot update the book with the id ${id}` });
        }
        const updatedBook = yield book_1.default.findById(id);
        return res
            .status(200)
            .json({ data: updatedBook, message: "book updated successfully" });
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield book_1.default.findByIdAndDelete(id);
        if (!book) {
            return res
                .status(400)
                .json({ error: `cannot delete the book with the id ${id}` });
        }
        return res.status(200).json({ message: "book deleted successfully" });
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
exports.deleteBook = deleteBook;
