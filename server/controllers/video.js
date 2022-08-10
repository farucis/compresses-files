import Ffmpeg from "fluent-ffmpeg";

/*---------GET VIDEO---------*/
export const getVideo = (req, res) => {
  const data = {
    videoFiles: [
      { id: 1, baseName: "Portfolio", fileName: "Portfolio.mov" },
      { id: 2, baseName: "CompressAPP", fileName: "CompressAPP.mov" },
    ],
    admins: ["faruch", "mapal", "refal"],
    users: ["dani", "avi", "simhon"],
  };

  res.json(data);
};

/*---------POST VIDEO---------*/
export const postVideo = (req, res) => {
  const data = req.body;
  console.log(data);
  
  res.send('1');
  /*
  const file = Ffmpeg()
    .output("-1280x720.mp4")
    .videoCodec("libx264")
    .noAudio()
    .size("1280x720")
    .fps(30)
    .format("mp4")

    .on("end", function () {
      console.log("Finished processing");
    });
  res.json(file);
  */
};
