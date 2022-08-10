import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import videoRouter from "./routes/video.js";

const app = express();

//--------Middleware--------//
app.use(bodyParser.json({ extended: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

/*--------Routes--------*/
app.use("/video-compress", videoRouter); //postVideo
app.use("/video-upload", videoRouter);   //getVideo

/*--------Server Port--------*/
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
