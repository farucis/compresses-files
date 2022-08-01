import express from "express";
import { getVideo } from "../controllers/video.js";

const videoRouter = express.Router();

videoRouter.get("/", getVideo);

export default videoRouter;
