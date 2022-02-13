import React from "react";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { GiPoloShirt, GiShirt } from "react-icons/gi";

const SubPlayer = ({ player }) => {
  const [green, yellow, red] = ["#79DE79", "#FCFC99", "#FB6962"];

  const abbreviate = (string) => {
    let abbreviation = "";
    const wordsArray = string.split(" ");
    wordsArray.map((item) => (abbreviation += item[0]));
    return abbreviation;
  };

  return (
    <div style={styles.activePlayer}>
      <div style={styles.jersey}>
        {player.position === "GK" ? (
          <GiShirt size={42} color="cyan" />
        ) : (
          <GiPoloShirt size={42} color="#FCFC99" />
        )}
      </div>
      <div
        style={{
          ...styles.playerDetails,
          backgroundColor: "#3c5f94",
        }}
      >
        <div style={styles.circle}>
          <div
            style={{
              height: "100%",
              width: Math.random() > 0.5 ? "100%" : "50%",
              backgroundColor: Math.random() > 0.5 ? green : yellow,
            }}
          ></div>
        </div>
        <span>
          {abbreviate(player.role)} - {player.duty.slice(0, 2)}
        </span>
        <FaCaretDown />
      </div>
      <div style={{ ...styles.playerDetails, backgroundColor: "#024d41" }}>
        <FaUserCircle />
        <span style={{ margin: "0 4px", overflow: "hidden" }}>
          {player.lastName}
        </span>
        <FaCaretDown />
      </div>
    </div>
  );
};

export default SubPlayer;

const styles = {
  activePlayer: {
    width: "110px",
    margin: "1em 0",
    display: "flex",
    flexDirection: "column",
  },
  jersey: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "-4px",
  },
  playerDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    borderRadius: "7px",
    margin: 0,
    padding: "0.5em",
    fontSize: "13px",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  circle: {
    width: "14px",
    height: "13px",
    border: "2px solid black",
    borderRadius: "50%",
    overflow: "hidden",
  },
};
