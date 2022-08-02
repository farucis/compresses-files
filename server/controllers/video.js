import Ffmpeg from "fluent-ffmpeg";

export const getVideo = (req, res) => {
  const data = {
    admins: ["faruch", "mapal", "refal"],
    users: ["dani", "avi", "simhon"],
  };

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
};

const postVideo = (req, res) => {
  const data = {
    admins: ["faruch", "mapal", "refal"],
    users: ["dani", "avi", "simhon"],
  };
  res.json(data);
};
