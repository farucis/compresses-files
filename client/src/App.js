import "./App.css";
import FileCompress from "./VideoCompressContainer/FileCompress/FileCompress";
import Header from "./VideoCompressContainer/Header/Header";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/abstract-flowing-neon-wave-background_53876-101942.jpg?w=2000')`,
        backgroundSize: "cover",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Header />
      <FileCompress />
    </div>
  );
}

export default App;
