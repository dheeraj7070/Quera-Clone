import { postQuestion } from "./postQuestion.controller.js"


const postQuestionHandler = async (req, res) => {

    console.log(req.body);

    const { title, body, name, email } = req.body;

    const uploader = {
        name : name,
        email : email
    };

    const response = await postQuestion(title, body,uploader)

    console.log(response);
    res.redirect("/");
}


export { postQuestionHandler };