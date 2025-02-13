import express from "express";
import multer from "multer";
import article from "../modules/articles/articleActions";

const router = express.Router();

// Multer :image file loader management
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}`);
  },
});

const upload = multer({ storage: storage });

//***********************************/

router.get("/api/article", article.browse);
router.post("/api/article/new", article.add);
router.get("/api/article/:id", article.read);

/* router.post("/api/admin/marker/book", verifyUserBook, marker.addBook);
router.get("/api/admin/marker/book/:id", marker.readBook); */

export default router;
