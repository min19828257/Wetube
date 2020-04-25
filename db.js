import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
        userNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connected DB");
const handleError = () => console.log(`Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error",handleError);

// export const videos = [
//     {
//         id : 421293,
//         title: 'Video awesome',
//         description: 'This is something I live',
//         views:24,
//         videoFile:"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator:{
//             id: 12212,
//             name:"kimminsu",
//             email:"min19828257@naver.com",
//         }
//     },
//     {
//         id:324393,
//         title: 'Video nice',
//         description: 'This is Second something I live',
//         views:24,
//         videoFile:"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator:{
//             id: 12212,
//             name:"kimminsu",
//             email:"min19828257@naver.com",
//         }
//     },
//     {
//         id:111111,
//         title: 'Video perfect',
//         description: 'This is Third something I live',
//         views:24,
//         videoFile:"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator:{
//             id: 12212,
//             name:"kimminsu",
//             email:"min19828257@naver.com",
//         }
//     }
// ]
