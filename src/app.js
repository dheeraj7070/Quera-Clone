import  express from "express";
import ejs from "ejs";
import cors from "cors";

import path, { dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const newdirname = path.dirname(__dirname);





const app = express();



// Set EJS as the template engine
app.set('view engine', 'ejs');

// middleware
app.use(express.json());
app.use(cors());
app.use("/static",express.static(newdirname + "/public"))
app.use(express.urlencoded({entended : true}));


// import router
import questionRouter from "./routes/question.router.js";
import { getQuestions } from "./controller/getPost.Controller.js";




// routes declaretion
app.get("/", getQuestions);
  

app.use("/api", questionRouter)

export {app};