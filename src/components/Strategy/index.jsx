import React from "react";
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";
import PlayingPlayer from "./PlayingPlayer";
import PositivesNegavtives from "./PositivesNegatives";
import SubPlayer from "./SubPlayer";
import { BiChevronDown } from "react-icons/bi";
import { playerStats } from "../../data/playerStats";
import playingField from "../../playing-field.png";

const Strategy = () => {
  return (
    <div style={styles.strategy}>
      <TopMenu />
      <div style={styles.content}>
        <SideMenu />
        <div style={styles.strategyMap}>
          <span style={{ opacity: 0.5 }}>FORMATION</span>
          <span style={{ marginBottom: "1em", display: "inline-block" }}>
            5-2-1-2 WB{" "}
            <BiChevronDown size={20} style={{ verticalAlign: "bottom" }} />
          </span>
          <div style={styles.playingField}>
            <div style={styles.goalkeeper}>
              <PlayingPlayer player={playerStats[0]} />
            </div>
            <div style={styles.defender1}>
              <PlayingPlayer player={playerStats[1]} />
            </div>
            <div style={styles.defender2}>
              <PlayingPlayer player={playerStats[2]} />
            </div>
            <div style={styles.defender3}>
              <PlayingPlayer player={playerStats[3]} />
            </div>
            <div style={styles.mid1}>
              <PlayingPlayer player={playerStats[4]} />
            </div>
            <div style={styles.mid2}>
              <PlayingPlayer player={playerStats[5]} />
            </div>
            <div style={styles.mid3}>
              <PlayingPlayer player={playerStats[6]} />
            </div>
            <div style={styles.mid4}>
              <PlayingPlayer player={playerStats[7]} />
            </div>
            <div style={styles.attacker1}>
              <PlayingPlayer player={playerStats[8]} />
            </div>
            <div style={styles.attacker2}>
              <PlayingPlayer player={playerStats[9]} />
            </div>
            <div style={styles.attacker3}>
              <PlayingPlayer player={playerStats[10]} />
            </div>
          </div>
          <PositivesNegavtives />
        </div>
        <div style={styles.subPlayers}>
          SUBS:
          {playerStats
            .filter((player) => !player.playing)
            .map((player) => (
              <SubPlayer player={player} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Strategy;

const styles = {
  strategy: {
    width: "60%",
    height: "100%",
    backgroundColor: "#317c33",
    borderRadius: "10px 0 0 10px",
    boxSizing: "border-box",
  },
  content: {
    display: "flex",
  },
  strategyMap: {
    width: "auto",
    marginTop: "8px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    fontSize: "14px",
    fontWeight: 700,
    textAlign: "center",
  },
  playingField: {
    backgroundImage: `url(${playingField})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "400px",
    height: "600px",
    position: "relative",
  },
  subPlayers: {
    margin: "8px 0.5em 8px 0.5em",
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "14px",
    fontWeight: 700,
    textAlign: "center",
  },
  goalkeeper: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
  },
  defender1: {
    position: "absolute",
    bottom: 80,
    left: "80%",
    transform: "translateX(-50%)",
  },
  defender2: {
    position: "absolute",
    bottom: 80,
    left: "50%",
    transform: "translateX(-50%)",
  },
  defender3: {
    position: "absolute",
    bottom: 80,
    left: "20%",
    transform: "translateX(-50%)",
  },
  mid1: {
    position: "absolute",
    top: "55%",
    right: 0,
    transform: "translateY(-50%)",
  },
  mid2: {
    position: "absolute",
    top: "55%",
    left: 0,
    transform: "translateY(-50%)",
  },
  mid3: {
    position: "absolute",
    top: "45%",
    left: 80,
    transform: "translateY(-50%)",
  },
  mid4: {
    position: "absolute",
    top: "45%",
    right: 80,
    transform: "translateY(-50%)",
  },
  attacker1: {
    position: "absolute",
    top: "20%",
    right: "20%",
    transform: "translateX(-50%)",
  },
  attacker2: {
    position: "absolute",
    top: 5,
    left: "20%",
  },
  attacker3: {
    position: "absolute",
    top: 25,
    right: "20%",
  },
};
