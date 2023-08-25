import express from "express";
import {
  getAll,
  getOne,
  addBook,
  updateBook,
  deleteBook,
} from "../controller/bookController";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
