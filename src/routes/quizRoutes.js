import { Router } from "express";
import { scoreAnswer } from "../services/answerService.js";
import { generateQuizFromWord } from "../services/dynamicQuizService.js";
import { generateQuiz, getAvailableCategories } from "../services/quizService.js";
import { generateReading } from "../services/readingService.js";
import { getWordDetails } from "../services/wordService.js";

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

quizRouter.get("/word", async (req, res, next) => {
  try {
    res.json(await getWordDetails(req.query.word));
  } catch (error) {
    next(error);
  }
});

quizRouter.get("/quiz-from-word", async (req, res, next) => {
  try {
    res.json(
      await generateQuizFromWord({
        word: req.query.word,
        level: req.query.level
      })
    );
  } catch (error) {
    next(error);
  }
});

quizRouter.get("/reading", async (req, res, next) => {
  try {
    res.json(
      await generateReading({
        topic: req.query.topic,
        level: req.query.level
      })
    );
  } catch (error) {
    next(error);
  }
});

quizRouter.get("/categories", (_req, res) => {
  res.json({
    categories: getAvailableCategories()
  });
});
