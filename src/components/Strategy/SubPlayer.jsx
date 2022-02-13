import React from "react";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { GiPoloShirt, GiShirt } from "react-icons/gi";

const SubPlayer = ({ player }) => {
  return (
    <div style={styles.subPlayer}>
      <div style={styles.jersey}>
        {player.position === "GK" ? (
          <GiShirt size={42} color="cyan" />
        ) : (
          <GiPoloShirt size={42} color="#FCFC99" />
        )}
      </div>
      <div style={styles.player}>
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
  subPlayer: {
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
  player: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#024d41",
    color: "#fff",
    borderRadius: "7px",
    margin: 0,
    padding: "0.5em",
    fontSize: "13px",
    textAlign: "center",
  },
};
