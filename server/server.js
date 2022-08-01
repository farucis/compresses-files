import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import videoRouter from "./routes/video.js";

const app = express();

app.use("/api", videoRouter);

app.use(bodyParser.json({ limit: "50mb" , extended: true}));
app.use(bodyParser.urlencoded({ limit: "50mb" , extended: false}));
app.use(cors());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
