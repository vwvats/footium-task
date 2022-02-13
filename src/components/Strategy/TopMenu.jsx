import React from "react";
import { BiChevronsLeft } from "react-icons/bi";
import { FaExclamationCircle, FaHeart, FaHotjar } from "react-icons/fa";

const TopMenu = () => {
  return (
    <div style={styles.tacticsMenu}>
      <BiChevronsLeft color="#fff" size={24} style={{ padding: "0.5em" }} />
      <div style={styles.tacticsMenuStats}>
        <FaExclamationCircle color="#034c41" size={18} />
        <p style={styles.text}>TACTICS</p>
        <div style={styles.select}>
          <p style={styles.selectText}>1</p>
          <p style={styles.selectOption}>5-2-1-2 WB - Vertical Tika-Taka</p>
          <p style={styles.selectText}>2</p>
          <p style={styles.selectText}>+</p>
        </div>
        <div style={styles.bars}>
          <div style={styles.barContainer}>
            <span>FAMILIARITY</span>
            <div style={styles.statBar}>
              <div style={{ height: "100%", display: "flex" }}>
                <div
                  style={{
                    ...styles.statBarIconContainer,
                    backgroundColor: "#48c000",
                  }}
                >
                  <FaHeart
                    color="#000"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div style={styles.familiarity}></div>
              </div>
            </div>
          </div>
          <div style={styles.barContainer}>
            <span>INTENSITY</span>
            <div style={styles.statBar}>
              <div style={{ height: "100%", display: "flex" }}>
                <div
                  style={{
                    ...styles.statBarIconContainer,
                    backgroundColor: "#6090F0",
                  }}
                >
                  <FaHotjar
                    color="#000"
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                <div style={styles.intensity}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;

const styles = {
  tacticsMenu: {
    backgroundColor: "#034c41",
    display: "flex",
    alignItems: "center",
    borderTopLeftRadius: "10px",
  },
  tacticsMenuStats: {
    backgroundColor: "#4db051",
    display: "flex",
    height: "100%",
    fontSize: "12px",
    color: "#fff",
    flex: 1,
    padding: "0 1em 0 1em",
    alignItems: "center",
  },
  text: {
    color: "#034c41",
    fontSize: "12px",
    fontWeight: 700,
    marginLeft: "0.5em",
  },
  select: {
    display: "flex",
    alignItems: "center",
    marginLeft: "0.5em",
    marginBottom: "3px",
  },
  selectText: {
    fontSize: "15px",
    fontWeight: 700,
    backgroundColor: "#298150",
    borderRadius: "3px",
    marginLeft: "0.25em",
    padding: "0.25em 0.5em",
    boxShadow: "0px 3px 0px 0px #106837",
  },
  selectOption: {
    fontSize: "12px",
    borderRadius: "3px",
    backgroundColor: "#034c41",
    marginLeft: "0.25em",
    padding: "0.5em 1em",
    boxShadow: "0px 3px 0px 0px #003328",
  },
  bars: {
    height: "100%",
    marginLeft: "auto",
    fontSize: "10px",
    fontWeight: 700,
    display: "flex",
    color: "#034c41",
    alignItems: "center",
  },
  barContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "1em",
  },
  statBar: {
    width: "100px",
    height: "10px",
    borderRadius: "3px",
    backgroundColor: "#000",
    padding: "1px",
  },
  statBarIconContainer: {
    borderRadius: "2px 0 0 2px",
    padding: "1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  familiarity: {
    backgroundColor: "#48C000",
    marginLeft: "1px",
    width: "55%",
    height: "100%",
    borderRadius: "0 2px 2px 0",
  },
  intensity: {
    backgroundColor: "#6090F0",
    marginLeft: "1px",
    width: "45%",
    height: "100%",
    borderRadius: "0 2px 2px 0",
  },
};
