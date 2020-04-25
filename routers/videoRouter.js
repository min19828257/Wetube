import express from "express";
import routes from "../routes";
import{
    videos,
    getUpload,
    postUpload,
    videoDetail,
    editVideo,
    deleteVideo,
    home
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.get(routes.upload, postUpload);

videoRouter.get(routes.videos, home);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
