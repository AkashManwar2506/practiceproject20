import "./App.css";
import Accordion from "./components/acordian/accordian";
import RandomColor from "./components/randomcolor/RandomColor";
import { SnackbarProvider, useSnackbar } from "notistack";
import StarRating from "./components/star-rating/StarRating";

function App() {
  return (
    <>
      {/* <Accordion /> // Accordian*/}

      {/* <SnackbarProvider>
        <RandomColor />
      </SnackbarProvider> */}

      <StarRating noOfStars={10} />
    </>
  );
}

export default App;
