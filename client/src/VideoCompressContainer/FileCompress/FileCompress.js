import React from "react";
import "./FileCompress.css";
import FileInput from "./FileInput/FileInput";

/*--------Export Default FileCompress--------*/

const FileCompress = () => {
  const [videoFile, setVideoFile] = React.useState(null);
  const [compressVideoFile, setCompressVideoFile] = React.useState(null);

  const [backEndData, setBackEndData] = React.useState(null);

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
