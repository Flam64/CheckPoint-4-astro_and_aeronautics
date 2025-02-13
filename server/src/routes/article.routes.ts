import express from "express";
import article from "../modules/articles/articleActions";

const router = express.Router();

router.get("/api/article", article.browse);
router.get("/api/article/:id", article.read);

/* router.post("/api/admin/marker/book", verifyUserBook, marker.addBook);
router.get("/api/admin/marker/book/:id", marker.readBook); */

export default router;
