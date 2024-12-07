import "./card.css";
import { Favorite, Share, Work, Place, EventNote, HowToReg, Group } from "@mui/icons-material";
import placeholder from "../assets/placeholder.jpg";
import logo from "../assets/Logo.png";
const Card = () => {
  return (
    <div className="card">
      <div className="img-container">
        <img className="img" src={placeholder} alt=""></img>
        <Favorite className="heart-symbol" />
        <Share className="share-symbol" />
      </div>
      <div className="card-header">
        <img className="company-logo" src={logo} alt="" />
        <text className="description-text" style={styles.descriptionText} >Company Name</text>
      </div>
      <div className="card-content">
        <div className="descriptions">
          <div className="description-sub-div">
            <Work style={styles.descriptionSymbol} />
            <text className="description-text" style={styles.descriptionText}>Job Status</text>
          </div>
          <div className="description-sub-div">
            <Place style={styles.descriptionSymbol}/>
            <text className="description-text" style={styles.descriptionText}>Location</text>
          </div>
          <div className="description-sub-div">
            <EventNote style={styles.descriptionSymbol} />
            <text className="description-text" style={styles.descriptionText}>Date</text>
          </div>
          <div className="description-sub-div">
            <HowToReg style={styles.descriptionSymbol} />
            <text className="description-text" style={styles.descriptionText}>Registration Details</text>
          </div>
          <div className="description-sub-div">
            <Group style={styles.descriptionSymbol} />
            <text className="description-text" style={styles.descriptionText}>Group Name</text>
          </div>
          <div className="buttons-div">
            <button className="apply-btn" style={styles.applyButton}>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  descriptionSymbol: {
    borderColor: "#B80C09",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "15px",
    padding: "1px",
  },
  descriptionText: {
    fontSize: "13px",
    margin: "3px",
    flex: "auto",
    padding: "5px",
  },
  applyButton: {
    paddingRight: "120px",
    paddingLeft: "120px",
    paddingTop: "5px",
    paddingBottom: "5px",
    color: "white",
    backgroundColor: "red",
    border: "none",
    borderRadius: "5px",
  },
};


export default Card;
