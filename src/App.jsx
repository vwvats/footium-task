import React from "react";
import Strategy from "./components/Strategy";
import PlayerStats from "./components/PlayerStats";

function App() {
  return (
    <div style={styles.tactics}>
      <Strategy />
      <PlayerStats />
    </div>
  );
}

export default App;

const styles = {
  tactics: {
    height: "auto",
    display: "flex",
    backgroundColor: "#380f57",
    padding: "1em",
  },
};
