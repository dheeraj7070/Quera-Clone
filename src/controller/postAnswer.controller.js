import mongoose from "mongoose";
import { QuestionAnswer } from "../models/Question.model.js";

const postAnswer = async (req, res) => {
    const { id, name, email, answer } = req.body;
    
    const objectId = await new mongoose.Types.ObjectId(id);
    const question = await QuestionAnswer.findById(objectId);

    if (!question) res.status(400).json({
        message: "Question does not found"
    })
    else {
       const ans = {
        name : name,
        email : email,
        ans : answer
       };

       question.answer.push(ans);
       question.save();
       res.redirect('back');
        // res.status(200).json({
        // //     message: question
        // // })
    }
}

export {postAnswer};