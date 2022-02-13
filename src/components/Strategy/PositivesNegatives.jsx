import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const PositivesNegavtives = () => {
  return (
    <div style={styles.container}>
      <div style={styles.posNeg}>
        <h4 style={{ color: "#79DE79" }}>POSITIVES</h4>
        <p>
          <AiFillLike
            size={18}
            color="#79DE79"
            style={{ marginRight: "5px" }}
          />
          Opposition touches to goals ratio
        </p>
        <p>
          <AiFillLike
            size={18}
            color="#79DE79"
            style={{ marginRight: "5px" }}
          />
          Opposition long range shots
        </p>
        <p>
          <AiFillLike
            size={18}
            color="#79DE79"
            style={{ marginRight: "5px" }}
          />
          Opposition goals from shots in penalty area
        </p>
        <p>
          <AiFillLike
            size={18}
            color="#79DE79"
            style={{ marginRight: "5px" }}
          />
          Regained possession
        </p>
      </div>
      <div style={styles.posNeg}>
        <h4 style={{ color: "#FB6962" }}>NEGATIVES</h4>
        <p>
          <AiFillDislike
            size={18}
            color="#FB6962"
            style={{ marginRight: "5px" }}
          />
          Touches to goals ratio
        </p>
        <p>
          <AiFillDislike
            size={18}
            color="#FB6962"
            style={{ marginRight: "5px" }}
          />
          Long range shots
        </p>
        <p>
          <AiFillDislike
            size={18}
            color="#FB6962"
            style={{ marginRight: "5px" }}
          />
          Goals from shots in penalty area
        </p>
        <p>
          <AiFillDislike
            size={18}
            color="#FB6962"
            style={{ marginRight: "5px" }}
          />
          Weak influence
        </p>
      </div>
    </div>
  );
};

export default PositivesNegavtives;

const styles = {
  container: {
    display: "flex",
    fontSize: "13px",
    fontWeight: 400,
    textAlign: "left",
  },
  posNeg: {
    marginRight: "1em",
  },
};
