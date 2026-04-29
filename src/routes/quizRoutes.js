import { Router } from "express";
import { scoreAnswer } from "../services/answerService.js";
import { generateQuiz, getAvailableCategories } from "../services/quizService.js";

export const quizRouter = Router();

quizRouter.get("/quiz", (req, res, next) => {
  try {
    const quiz = generateQuiz({
      level: req.query.level,
      category: req.query.category
    });

    res.json(quiz);
  } catch (error) {
    next(error);
  }
});

quizRouter.post("/answer", (req, res, next) => {
  try {
    res.json(scoreAnswer(req.body));
  } catch (error) {
    next(error);
  }
});

quizRouter.get("/categories", (_req, res) => {
  res.json({
    categories: getAvailableCategories()
  });
});
