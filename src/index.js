import mongoose from "mongoose";  //always use async await
import { DB_NAME } from "./constants";
import express from "express"
const app = express();







//iffy
// ; (async () => {
//     try {
//         await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}');
//         app.on("error", (error) => {
//             console.log("error", error);
//             throw error;
//         })
//         app.listen(process.env.PORT)
//     } catch (error) {
//         console.error("error", error);
//         throw error
        
//     };
    
// })()