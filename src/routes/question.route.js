const { Router } = require("express");
require("dotenv").config();

const { QuestionModel } = require("../models/Question.model");

const questionRoutes = Router();

questionRoutes.get("/", async (req, res) => {
  const category = req.query.category;
  const difficulty = req.query.difficulty;
  const no = Number(req.query.no);
  console.log(category, difficulty, typeof(no));
  const questions = await QuestionModel.find({category: category, difficulty: difficulty});
  questions.length = no;
  res.send(questions);
});

module.exports = {
  questionRoutes,
};
