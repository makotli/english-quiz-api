import express from "express";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";
import { quizRouter } from "./routes/quizRoutes.js";

export function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({
      status: "ok",
      service: "english-vocabulary-quiz-api"
    });
  });

  app.use(quizRouter);
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
