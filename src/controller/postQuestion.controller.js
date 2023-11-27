import {QuestionAnswer} from "../models/Question.model.js";

const postQuestion = async (title, body, uploader) => {
    const post = {
        title :  title,
        body : body,
        uploader : uploader,
        answer : []
    }

  return await QuestionAnswer.create(post);
}

export {postQuestion};