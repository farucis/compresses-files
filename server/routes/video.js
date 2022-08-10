import express from "express";
import { getVideo, postVideo } from "../controllers/video.js";

const videoRouter = express.Router();

videoRouter.get("/", getVideo);
videoRouter.post("/", postVideo);


export default videoRouter;
