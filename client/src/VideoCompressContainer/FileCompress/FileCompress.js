import React from "react";
import "./FileCompress.css";
import axios from "axios";

import FileInput from "./FileInput/FileInput";

/*--------Export Default FileCompress--------*/

const FileCompress = () => {
  const [videoFile, setVideoFile] = React.useState(null);
  const [compressVideoFile, setCompressVideoFile] = React.useState(null);
  const [backEndData, setBackEndData] = React.useState(null);

  const compress = async (video) => {
    if (video) {
      /*----Compress Video File Data----*/
      const data = {
        fileName: video.name,
        baseName: video.name.substring(0, video.name.lastIndexOf(".")),
      };

      /*--------Send Video File to BackEnd--------*/
      await axios
        .post("/video-compress", data)
        .then((res) => {
          console.log("video compress start");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("video compress compleate");
        });

      /*--------Get Video File from BackEnd--------*/
      axios
        .get("video-upload")
        .then((res) => {
          setBackEndData(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("video upload compleate");
        });
    }
  };

  const compressVideo = () => {
    let compresedVideo = compress(videoFile);
    setCompressVideoFile(videoFile);
  };

  return (
    <div className="file-compress-container">
      <FileInput videoFile={videoFile} setVideoFile={setVideoFile} />

      <div>
        <button
          className="btn btn-dark"
          style={{ margin: "40px" }}
          onClick={() => compressVideo()}
        >
          compress
        </button>
      </div>

      <Results
        backEndData={backEndData}
        compressVideoFile={compressVideoFile}
      />
    </div>
  );
};
//--------Help Components--------//

/*----Results----*/
const Results = ({ backEndData, compressVideoFile }) => (
  <div className="results-container">
    <DownloadButton compressVideoFile={compressVideoFile} />
    <ResultsData backEndData={backEndData} />
  </div>
);

/*----Download Button----*/
const DownloadButton = ({ compressVideoFile }) => (
  <div>
    {compressVideoFile ? (
      <div style={{ textAlign: "center" }}>
        <a href={URL.createObjectURL(compressVideoFile)} download>
          <button className="btn btn-success" style={{ margin: "40px" }}>
            download
          </button>
        </a>
        <h1 style={{ fontSize: "30px", color: "white", opacity: "0.7" }}>
          Compress Video File Compleate
        </h1>
      </div>
    ) : null}
  </div>
);

/*----Results Data----*/
const ResultsData = ({ backEndData }) => (
  <div
    style={{
      border: "1px solid #3d3d3de8",
      borderRadius: "20px",
      padding: "20px",
      minWidth: "70%",
    }}
  >
    {typeof backEndData?.admins === "undefined" ? (
      <h1 style={{ fontSize: "30px", color: "white", opacity: "0.7" }}>
        Loading . . .
      </h1>
    ) : (
      <>
        <h1>admins</h1>
        {backEndData.admins.map((admin, i) => (
          <p key={i}>{admin}</p>
        ))}
      </>
    )}
  </div>
);

export default FileCompress;
