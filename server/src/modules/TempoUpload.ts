import type { RequestHandler } from "express";
import multer from "multer";

export const TempoUpload: RequestHandler = async (req, res) => {
  console.info(req.file);
  try {
    if (req.file) {
      // parsing file ...

      res.status(201).json({ picture: req.file.filename });
    }
  } catch (err) {}
};
