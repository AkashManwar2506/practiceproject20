import { FaStar } from "react-icons/fa";
import "./style.css";
import { useState } from "react";

function StarRating({ noOfStars = 5 }) {
  const [hovered, setHovered] = useState(0);
  const [rating, setRating] = useState(0);

  function onStarClick(clickedStar) {
    if (clickedStar === 1 && rating === 1) {
      setRating(0);
      return;
    }
    setRating(clickedStar);
  }
  function onMouseEnter(enteredStar) {
    setHovered(enteredStar);
  }
  function onMouseLeave(index) {
    setHovered(rating);
  }

  return (
    <>
      <div>
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              className={index <= hovered ? "active" : "inActive"}
              key={index}
              style={{
                fontSize: "50px",
              }}
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={() => onMouseLeave(index)}
              onClick={() => onStarClick(index)}
            />
          );
        })}
      </div>
      <h2 style={{ marginTop: "30px" }}>Your rating is {rating}</h2>
    </>
  );
}

export default StarRating;
