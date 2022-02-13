import React from "react";
import {
  BiChevronDown,
  BiChevronsLeft,
  BiChevronsRight,
  BiFootball,
} from "react-icons/bi";
import {
  FaBalanceScale,
  FaExclamationCircle,
  FaHeart,
  FaHotjar,
  FaExchangeAlt,
} from "react-icons/fa";

const Map = () => {
  return (
    <div style={styles.map}>
      <div style={styles.mapMenu}>
        <BiChevronsLeft color="#fff" size={24} style={{ padding: "0.5em" }} />
        <div style={styles.mapMenuStats}>
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
      {/* Map SideBar */}
      <div style={styles.mapSideBar}>
        <p style={styles.sideBarTitle}>TACTICAL STYLE</p>
        <div style={styles.sideBarTact}>
          <span>VERTICAL</span>
          <span>TIKI-TAKA</span>
          <BiChevronDown size={24} style={styles.chevDown} />
        </div>
        <div style={styles.line}></div>
        <p style={styles.mentalityText}>MENTALITY</p>
        <div style={styles.mentality}>
          <FaBalanceScale /> Balanced <BiChevronDown size={20} />
        </div>
        <div style={styles.possession}>
          <div style={{ ...styles.possessionTitle, marginTop: "0.5em" }}>
            <BiFootball size={16} style={{ marginRight: "1em" }} /> IN
            POSSESSION
          </div>
          <div>
            <p style={styles.possessionInstructions}>Shorter Passing</p>
            <p style={styles.possessionInstructions}>Play Out of Defence</p>
            <p style={styles.possessionInstructions}>Work Ball Into Box</p>
            <p style={styles.possessionInstructions}>Be More Expressive</p>
            <p style={styles.possessionInstructions}>
              Focus Play Through The Middle
            </p>
            <p style={styles.possessionInstructions}>Underlap Left</p>
            <p style={styles.possessionInstructions}>Underlap Right</p>
            <p style={styles.possessionInstructions}>Lower Tempo</p>
            <p style={styles.possessionInstructions}>Very Narrow</p>
          </div>
          <div style={{ ...styles.possessionTitle, marginBottom: "0.5em" }}>
            <BiChevronsRight size={20} /> CHANGE
          </div>
        </div>
        {/* Transition */}
        <div style={styles.possession}>
          <div style={{ ...styles.possessionTitle, marginTop: "0.5em" }}>
            <FaExchangeAlt size={14} style={{ marginRight: "1em" }} /> IN
            TRANSITION
          </div>
          <div>
            <p style={styles.possessionInstructions}>Take Short Kicks</p>
            <p style={styles.possessionInstructions}>
              Distribute to Center-Backs
            </p>
            <p style={styles.possessionInstructions}>Counter</p>
            <p style={styles.possessionInstructions}>Counter-Press</p>
          </div>
          <div style={{ ...styles.possessionTitle, marginBottom: "0.5em" }}>
            <BiChevronsRight size={20} /> CHANGE
          </div>
        </div>
        {/* Out of Possession */}
        <div style={styles.possession}>
          <div style={{ ...styles.possessionTitle, marginTop: "0.5em" }}>
            <BiFootball size={16} style={{ marginRight: "1em" }} /> OUT
            POSSESSION
          </div>
          <div>
            <p style={styles.possessionInstructions}>Higher Defensive Line</p>
            <p style={styles.possessionInstructions}>
              Higher Line of Engagement
            </p>
            <p style={styles.possessionInstructions}>More Urgent</p>
            <p style={styles.possessionInstructions}>Prevent Short GK</p>
            <p style={styles.possessionInstructions}>Distribution</p>
          </div>
          <div style={{ ...styles.possessionTitle, marginBottom: "0.5em" }}>
            <BiChevronsRight size={20} /> CHANGE
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  map: {
    width: "55%",
    height: "100%",
    backgroundColor: "#317c33",
    borderRadius: "10px 0 0 10px",
    boxSizing: "border-box",
  },
  mapMenu: {
    backgroundColor: "#034c41",
    height: "5%",
    display: "flex",
    alignItems: "center",
    borderTopLeftRadius: "10px",
  },
  mapMenuStats: {
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
  mapSideBar: {
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
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
  },
  possession: {
    background: "#165d53",
    padding: "0.25em 1em",
    marginTop: "1em",
    borderRadius: "5px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    fontSize: "12px",
  },
  possessionTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: 700,
  },
  possessionInstructions: {
    margin: 0,
    padding: "0.25em",
    opacity: 0.7,
    textAlign: "center",
  },
};

export default Map;
