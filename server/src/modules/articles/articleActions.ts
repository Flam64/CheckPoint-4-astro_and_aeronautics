import type { RequestHandler } from "express";
import articleRepository from "./articleRepository";

const browse: RequestHandler = async (req, res) => {
  try {
    const article = await articleRepository.browseAll();

    if (article == null) {
      res.sendStatus(404);
    } else {
      res.json(article);
    }
  } catch (err) {}
};

const read: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const idArticle = Number.parseInt(id);
    const article = await articleRepository.read(idArticle);

    if (article == null) {
      res.sendStatus(404);
    } else {
      res.json(article);
    }
  } catch (err) {}
};
/*
const readBook: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const markerBook = await markerRepository.readBook(id);

    if (markerBook == null) {
      res.sendStatus(404);
    } else {
      res.json(markerBook);
    }
  } catch (err) {}
};
*/
const add: RequestHandler = async (req, res) => {
  console.info("req Body", req.body);
  const { data } = req.body;
  try {
    const rows = await articleRepository.create(data);
    if (rows !== null) {
      res.status(201);
    } else {
      res.status(500).json("La mise à jour de la table station à échoué");
    }
  } catch (err) {
    res.json("La mise à jour de la table station à échoué");
  }
};

export default { browse, read, add };
