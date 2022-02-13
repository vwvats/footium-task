import React from "react";
import {
  CircularProgressbarWithChildren,
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const StatCircle = ({ con, shp }) => {
  const [green, yellow, red] = ["#79DE79", "#FCFC99", "#FB6962"];
  const currentColor = (variable) => {
    return variable > 75 ? green : variable > 50 ? yellow : red;
  };

  return (
    <div style={styles.container}>
      <span
        style={{ color: currentColor(con), marginRight: "5px" }}
      >{`${con}%`}</span>
      <div
        style={{
          height: "24px",
          width: "24px",
          margin: 0,
          padding: 0,
        }}
      >
        <CircularProgressbarWithChildren
          value={con}
          styles={buildStyles({
            pathColor: currentColor(con),
            trailColor: "transparent",
          })}
        >
          <div style={{ height: "75%", width: "75%" }}>
            <CircularProgressbar
              value={shp}
              styles={buildStyles({
                pathColor: currentColor(shp),
                trailColor: "transparent",
              })}
            />
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <span
        style={{ color: currentColor(shp), marginLeft: "5px" }}
      >{`${shp}%`}</span>
    </div>
  );
};

export default StatCircle;

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
  },
};
