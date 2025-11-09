import { useEffect, useState } from "react";
import "./style.css";
import { enqueueSnackbar } from "notistack";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#858585ff");
  const [copied, setCopied] = useState(null);
  const [timesNotified, setTimesNotified] = useState(0);

  const generateRandomColor = () => {
    if (typeOfColor === "hex") {
      const hexCharArr = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];
      let hexCode = "#";
      for (let i = 0; i < 6; i++) {
        hexCode += hexCharArr[Math.floor(Math.random() * 16)];
      }
      setColor(hexCode);
    } else {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const rgbColor = `rgb(${r}, ${g}, ${b})`;
      setColor(rgbColor);
    }

    console.log(color);
  };

  useEffect(() => {
    generateRandomColor();
  }, [typeOfColor]);
  useEffect(() => {
    setCopied(null);
    setTimesNotified(0);
  }, [color]);

  const copyToClipboard = () => {
    if (timesNotified >= 2) {
      return;
    }
    if (copied === color) {
      enqueueSnackbar(`Already Copied to clipboard!`, {
        autoHideDuration: 2000,
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
      });
      setTimesNotified(timesNotified + 1);
      return;
    }
    navigator.clipboard
      .writeText(color)
      .then(() => {
        enqueueSnackbar(`Copied ${color} to clipboard!`, {
          autoHideDuration: 2000,
          variant: "success",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
        });
        setCopied(color);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <div style={{ background: color }} className="container">
      <nav className="navbar">
        <button onClick={() => setTypeOfColor("hex")}>HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>RGB Color</button>
        <button onClick={() => generateRandomColor()}>
          Generate Random Color
        </button>
      </nav>
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          background: "blur",
          cursor: "pointer",
        }}
        onClick={copyToClipboard}
      >
        <h1>Click to copy</h1>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
