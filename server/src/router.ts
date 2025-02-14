import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import authRouter from "./routes/auth.routes";

router.use("/", authRouter);

// Define database station-related route
import articles from "./routes/article.routes";
router.use("/", articles);

export default router;
