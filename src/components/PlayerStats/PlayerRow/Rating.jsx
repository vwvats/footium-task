import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ stars }) => {
  const fillStars = [];
  for (let i = 0; i < stars; i++) {
    fillStars.push(<AiFillStar size={18} color="yellow" key={i.toString()} />);
  }

  const outlineStars = [];
  for (let i = 0; i < 5 - stars; i++) {
    outlineStars.push(
      <AiOutlineStar size={18} color="yellow" key={i.toString()} />
    );
  }

  return (
    <div style={styles.rating}>
      {fillStars}
      {outlineStars}
    </div>
  );
};

export default Rating;

const styles = {
  rating: {
    backgroundColor: "#3c5f9495",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
