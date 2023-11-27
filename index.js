import dotenv from "dotenv";
dotenv.config("./.env");
import { app } from "./src/app.js";
import { connectDB } from "./src/db/connect.js";


connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port ", process.env.PORT);
        })
    })
