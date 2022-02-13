import React from "react";
import { BiChevronDown, BiChevronsRight, BiFootball } from "react-icons/bi";
import { FaBalanceScale, FaExchangeAlt } from "react-icons/fa";

const SideMenu = () => {
  return (
    <div style={styles.tacticsSidebar}>
      <p style={styles.sideBarTitle}>TACTICAL STYLE</p>
      <div style={styles.sideBarTact}>
        <span>VERTICAL</span>
        <span>TIKI-TAKA</span>
        <BiChevronDown size={24} style={styles.chevDown} />
      </div>
      <div style={styles.line}></div>
      <p style={styles.mentalityText}>MENTALITY</p>
      <div style={styles.mentality}>
        <FaBalanceScale /> <span style={{ margin: "0 1em" }}>Balanced</span>{" "}
        <BiChevronDown size={20} />
      </div>
      {/* Possession */}
      <div style={styles.strategy}>
        <div style={{ ...styles.strategyTitle, marginTop: "0.5em" }}>
          <BiFootball size={16} style={{ marginRight: "1em" }} /> IN POSSESSION
        </div>
        <div>
          <p style={styles.strategyInstructions}>Shorter Passing</p>
          <p style={styles.strategyInstructions}>Play Out of Defence</p>
          <p style={styles.strategyInstructions}>Work Ball Into Box</p>
          <p style={styles.strategyInstructions}>Be More Expressive</p>
          <p style={styles.strategyInstructions}>
            Focus Play Through The Middle
          </p>
          <p style={styles.strategyInstructions}>Underlap Left</p>
          <p style={styles.strategyInstructions}>Underlap Right</p>
          <p style={styles.strategyInstructions}>Lower Tempo</p>
          <p style={styles.strategyInstructions}>Very Narrow</p>
        </div>
        <div style={{ ...styles.strategyTitle, marginBottom: "0.5em" }}>
          <BiChevronsRight size={20} /> CHANGE
        </div>
      </div>
      {/* Transition */}
      <div style={styles.strategy}>
        <div style={{ ...styles.strategyTitle, marginTop: "0.5em" }}>
          <FaExchangeAlt size={14} style={{ marginRight: "1em" }} /> IN
          TRANSITION
        </div>
        <div>
          <p style={styles.strategyInstructions}>Take Short Kicks</p>
          <p style={styles.strategyInstructions}>Distribute to Center-Backs</p>
          <p style={styles.strategyInstructions}>Counter</p>
          <p style={styles.strategyInstructions}>Counter-Press</p>
        </div>
        <div style={{ ...styles.strategyTitle, marginBottom: "0.5em" }}>
          <BiChevronsRight size={20} /> CHANGE
        </div>
      </div>
      {/* Out of POSSESSION */}
      <div style={styles.strategy}>
        <div style={{ ...styles.strategyTitle, marginTop: "0.5em" }}>
          <BiFootball size={16} style={{ marginRight: "1em" }} /> OUT OF
          POSSESSION
        </div>
        <div>
          <p style={styles.strategyInstructions}>Higher Defensive Line</p>
          <p style={styles.strategyInstructions}>Higher Line of Engagement</p>
          <p style={styles.strategyInstructions}>More Urgent</p>
          <p style={styles.strategyInstructions}>Prevent Short GK</p>
          <p style={styles.strategyInstructions}>Distribution</p>
        </div>
        <div style={{ ...styles.strategyTitle, marginBottom: "0.5em" }}>
          <BiChevronsRight size={20} /> CHANGE
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

const styles = {
  tacticsSidebar: {
    height: "auto",
    width: "25%",
    borderRadius: "10px",
    backgroundColor: "#034c41",
    margin: "8px",
    padding: "1em",
  },
  sideBarTitle: {
    fontSize: "14px",
    fontWeight: 700,
    margin: "0 auto 0.5em auto",
    padding: 0,
    color: "#fff",
    textAlign: "center",
    opacity: 0.5,
  },
  sideBarTact: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    fontWeight: 700,
    fontSize: "16px",
    alignItems: "center",
  },
  chevDown: {
    position: "absolute",
    right: 0,
    top: "20%",
  },
  line: {
    margin: "0.5em 0",
    width: "100%",
    height: "1px",
    background: "#fff",
    opacity: 0.5,
  },
  mentalityText: {
    color: "#fff",
    textAlign: "center",
    fontSize: "13px",
    fontWeight: 700,
  },
  mentality: {
    background: "#165d53",
    padding: "0.25em 1em",
    borderRadius: "5px",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "14px",
  },
  strategy: {
    background: "#165d53",
    padding: "0.25em 1em",
    marginTop: "1em",
    borderRadius: "5px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    fontSize: "12px",
  },
  strategyTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: 700,
  },
  strategyInstructions: {
    margin: 0,
    padding: "0.25em",
    opacity: 0.7,
    textAlign: "center",
  },
};
