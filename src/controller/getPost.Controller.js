import mongoose from "mongoose";
import {QuestionAnswer} from "../models/Question.model.js";


const getQuestions = async (req, res) => {
    const questions = await QuestionAnswer.find();
    
   res.render("index.ejs",{questions});
    
}

const getQuestionById = async (req, res) => {
    
    console.log("url ", req.params);
    const objectUrl = new mongoose.Types.ObjectId(req.params.url);
    const question = await QuestionAnswer.findById(objectUrl);
    let setShow =  () => {show = "block"}
    if(question) res.render("questionAnswer.ejs", {question, setShow});
    else res.send("QUestion Not found");



}

export {getQuestions, getQuestionById};