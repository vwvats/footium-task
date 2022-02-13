import React from "react";

const Bar = ({ percentFilled }) => {
  if (!percentFilled) {
    return <div></div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.outerBar}>
        <div
          style={{
            width: `${percentFilled * 10}%`,
            height: "100%",
            backgroundColor: "#47988d",
            borderRadius: "3px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Bar;

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  outerBar: {
    background: "#000",
    borderRadius: "5px",
    height: "10px",
    width: "60px",
    padding: "2px",
  },
};
