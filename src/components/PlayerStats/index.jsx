import React from "react";
import PlayerRow from "./PlayerRow";
import { playerStats } from "../../data/playerStats";

const PlayerStats = () => {
  return (
    <div style={styles.playerStats}>
      <div style={styles.columnHeader}>
        <span>POSITION/ROLE/DUTY</span>
        <span>ROLE ABILITY</span>
        <span>PLAYER</span>
        <span>CON/SHP</span>
        <span>POS</span>
        <span>TAC FAMI</span>
        <span>LAST 5 GAMES</span>
      </div>
      {playerStats.map((item) => (
        <PlayerRow key={item.id} player={item} />
      ))}
    </div>
  );
};

const styles = {
  playerStats: {
    width: "fit-content",
    height: "auto",
    color: "#fff",
    marginLeft: "0.5em",
    marginBottom: "2em",
    overflow: "scroll",
  },
  columnHeader: {
    display: "grid",
    gridTemplateColumns: "260px 100px 140px 100px 40px 100px 40px",
    fontSize: "10px",
    fontWeight: 700,
    textAlign: "center",
  },
};

export default PlayerStats;
