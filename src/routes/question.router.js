import { Router } from "express";
import { postQuestionHandler } from "../controller/postQuestionHandler.control.js";
import { getQuestionById, getQuestions } from "../controller/getPost.Controller.js";
import { postAnswer } from "../controller/postAnswer.controller.js";

const router = Router();


// routes
router.route("/post-question").post(postQuestionHandler);
router.route("/post-question").get((req, res) => res.render("postQuestion.ejs"));
router.route("/").get(getQuestions)
router.route("/ans").post(postAnswer);
router.route("/:url").get(getQuestionById);


export default router;


