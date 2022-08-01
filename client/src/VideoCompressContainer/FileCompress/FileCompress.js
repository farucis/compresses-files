//import Ffmpeg from "fluent-ffmpeg";
import React from "react";
import "./FileCompress.css";

const FileCompress = () => {
  const [videoFile, setVideoFile] = React.useState(null);
  const [compressVideoFile, setCompressVideoFile] = React.useState(null);

  const [backEndData, setBackEndData] = React.useState(null);

  React.useEffect(() => {
    // console.log(backEndData);
  }, []);

  const compress = async (video) => {
    if (video) {
      var fileName = video.name;
      var baseName = fileName.substring(0, fileName.lastIndexOf("."));
    }

    fetch("api")
      .then((res) => res.json())
      .then((data) => {
        setBackEndData(data);
      });
    //console.log(fileName, baseName);
    /*
    Ffmpeg(fileName)
      .output(baseName + "-1280x720.mp4")
      .videoCodec("libx264")
      .noAudio()
      .size("1280x720")
      .fps(30)
      .format("mp4")

      .on("end", function () {
        console.log("Finished processing");
      })

      .run();
      */
  };

  const compressVideo = () => {
    let compresedVideo = videoFile;
    compress(compresedVideo);
    setCompressVideoFile(compresedVideo);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        minWidth: "100vw",
        backgroundColor: "#eed",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "60vh",
          minWidth: "60vw",
          paddingInline: "20px",
          backgroundColor: "#eee",
        }}
        id="fileInput"
      >
        <div
          className="inputArea"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#edd",
            color: "#5ad",
            height: "240px",
            width: "400px",
            borderRadius: "10px",
            border: "1px solid #000",
            padding: "10px",
            paddingBlock: "20px",
          }}
        >
          <input
            type="file"
            id="file"
            name="file"
            accept="video/*"
            //multiple
            style={{
              backgroundColor: "#eed",
              fontSize: "18px",
            }}
            onChange={(e) => setVideoFile(e.target.files[0])}
          />
          {videoFile && (
            <i
              style={{ fontSize: "120px", paddingBottom: "10px" }}
              className="bi bi-file-earmark-play-fill"
            ></i>
          )}
        </div>
        <div
          className="video-screen"
          style={{
            display: "flex",
            backgroundColor: "#edd",
            color: "#5ad",
            height: "260px",
            width: "360px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {videoFile && (
            <video width="320" height="240" controls>
              <source src={URL.createObjectURL(videoFile)} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10px",
        }}
        id="fileCompress"
      >
        <button onClick={() => compressVideo()}>compress</button>
        {compressVideoFile ? (
          <>
            <a href={URL.createObjectURL(compressVideoFile)} download>
              <button>download</button>
            </a>
            <h1>compressVideoFile compleate</h1>
          </>
        ) : null}
      </div>
      {typeof backEndData?.users === "undefined" ? (
        <p>Loading . . .</p>
      ) : (
        backEndData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
};

export default FileCompress;
