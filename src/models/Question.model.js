import {mongoose, Schema} from "mongoose";

const user = {
    name : String,
    email : String,
    ans : String
}

const uploader = {
    name : String,
    email : String,
}


const questionAnswerSchema = new Schema({
    title : {
        type : String,
        require : true
    },
    body : {
        type : String,

    },
    uploader : {
        type : uploader,
        required: true
    },
    answer : {
        type : [user]
    }
});


export const QuestionAnswer = mongoose.model("QuestionAnswer",questionAnswerSchema);


