import React from "react";

const Circle = ({ width }) => {
  const [green, yellow, red] = ["#79DE79", "#FCFC99", "#FB6962"];

  return (
    <div style={styles.container}>
      <div style={styles.circle}>
        <div
          style={{
            height: "100%",
            width: width > 0.5 ? "100%" : "50%",
            backgroundColor: width > 0.5 ? green : yellow,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Circle;

const styles = {
  container: {
    backgroundColor: "#3c5f9495",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: "18px",
    height: "18px",
    border: "2px solid black",
    borderRadius: "50%",
    overflow: "hidden",
  },
};
