import React from "react";
import "./FileInput.css";

//--------Export Default FileInput--------//
const FileInput = ({ videoFile, setVideoFile }) => {
  return (
    <div className="file-input-container" id="fileInput">
      <Input videoFile={videoFile} setVideoFile={setVideoFile} />
      <ShowVideo videoFile={videoFile} />
    </div>
  );
};



//--------Help Components--------//

//----Input Video File----//
const Input = ({ videoFile, setVideoFile }) => (
  <div className="input-area">
    <input
      className="input-file"
      type="file"
      id="file"
      name="file"
      accept="video/*"
      //multiple
      onChange={(e) => setVideoFile(e.target.files[0])}
    />

    {videoFile && (
      <i
        style={{ fontSize: "120px", paddingBottom: "10px" }}
        className="bi bi-file-earmark-play-fill"
      ></i>
    )}
  </div>
);


//----Show Video File----//
const ShowVideo = ({ videoFile }) => (
  <div className="video-screen">
    {videoFile && (
      <video width="320" height="240" controls>
        <source src={URL.createObjectURL(videoFile)} type="video/mp4" />
      </video>
    )}
  </div>
);

export default FileInput;
