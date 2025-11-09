import "./App.css";
import Accordion from "./components/acordian/accordian";
import RandomColor from "./components/randomcolor/RandomColor";
import { SnackbarProvider, useSnackbar } from "notistack";

function App() {
  return (
    <>
      {/* <Accordion /> // Accordian*/}

      <SnackbarProvider>
        <RandomColor />
      </SnackbarProvider>
    </>
  );
}

export default App;
