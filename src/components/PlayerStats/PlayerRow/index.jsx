import React from "react";
import Circle from "./Circle";
import Rating from "./Rating";
import StatCircle from "./StatCircle";
import Bar from "./Bar";
// Icons
import { BiChevronDown } from "react-icons/bi";
import { GiPoloShirt, GiShirt } from "react-icons/gi";

const PlayerRow = ({ player }) => {
  return (
    <div
      style={{
        ...styles.gridContainer,
        background:
          player.id % 2 === 0 ? "transparent" : "rgba(255,255,255,0.1)",
      }}
    >
      {player.playing ? (
        <>
          <div style={styles.position}>{player.position}</div>
          <Circle width={Math.random()} />
          <div style={styles.roleDuty}>
            <div style={styles.roleDutyText}>
              <span style={{ fontSize: "12.5px", fontWeight: 700 }}>
                {player.role}
              </span>
              <span style={{ color: "#FCFC99", fontSize: "12px" }}>
                {player.duty}
              </span>
            </div>
            <BiChevronDown size={18} />
          </div>
          <Rating stars={player.roleAbility} />
        </>
      ) : (
        <>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </>
      )}
      <div style={styles.player}>
        {player.position === "GK" ? (
          <GiShirt size={18} color="cyan" />
        ) : (
          <GiPoloShirt size={18} color="#79DE79" />
        )}
        <p style={styles.playerName}>
          {player.firstName} {player.lastName}
        </p>
        <BiChevronDown size={18} />
      </div>
      <StatCircle con={player.con} shp={player.shp} />
      <p
        style={{
          margin: 0,
          marginLeft: "0.5em",
          padding: "0.5em",
          fontSize: "13px",
          alignSelf: "center",
        }}
      >
        {player.position}
      </p>
      <Bar percentFilled={player.tacticsFam} />
      <p style={styles.prevGames}>
        {!player.last5Games ? "-" : player.last5Games}
      </p>
    </div>
  );
};

export default PlayerRow;

const styles = {
  gridContainer: {
    boxSizing: "border-box",
    width: "fit-content",
    height: "50px",
    display: "grid",
    gridTemplateColumns: "40px 40px 180px 100px 140px 100px 40px 100px 40px",
  },
  position: {
    backgroundColor: "#3c5f9495",
    padding: "1em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "13px",
  },
  roleDuty: {
    backgroundColor: "#3c5f9495",
    padding: "0.5em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  roleDutyText: {
    display: "flex",
    flexDirection: "column",
  },
  player: {
    padding: "0.5em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  playerName: {
    fontSize: "14px",
    width: "80px",
    whiteSpace: "nowrap",
    margin: 0,
    marginLeft: "5px",
    padding: 0,
    overflow: "hidden",
  },
  prevGames: {
    background: "grey",
    borderRadius: "10px",
    margin: "auto 0.5em auto 0",
    padding: "2px",
    fontSize: "12px",
    textAlign: "center",
  },
};
