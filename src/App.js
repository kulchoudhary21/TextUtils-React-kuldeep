import { useState } from "react";
import About from "./my component/About";
import Alert from "./my component/Alert";
import Header from "./my component/Header";
import TextForm from "./my component/TextForm";
function App() {
  const [mode, setMode] = useState(true);
  const [style, setStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [alert, setAlert] = useState(null);
  const [colortheme, getColorTheme] = useState(null);
  let msg = "";
  let onChangeToggle = () => {
    if (mode) {
      let style = {
        backgroundColor: "black",
        color: "white",
      };
      document.body.style.backgroundColor = "#042745";
      setMode(false);
      setStyle(style);
      showAlert("change to Dark mode", "success");
      document.title = "TextUtils : Dark mode";
    } else {
      let style = {
        backgroundColor: "white",
        color: "black",
      };
      document.body.style.backgroundColor = "white";
      setMode(true);
      setStyle(style);
      showAlert("change to Light mode", "success");
      document.title = "TextUtils : Light mode";
    }
  };
  function showAlert(msg, type) {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function getColor(e) {
    getColorTheme(e.target.value);
  }
  return (
    <div>
      <Header
        title="Text Utils"
        onToggle={onChangeToggle}
        checked={mode}
        msg={msg}
        style1={style}
        showAlert={showAlert}
        getColor={getColor}
      />
      <Alert alert={alert} />
      <TextForm
        label="Enter Text to analyze the data"
        style1={style}
        showAlert={showAlert}
        colortheme={colortheme}
      />

      <About />
    </div>
  );
}

export default App;
