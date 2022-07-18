import styles from "../../styles/Posts.module.scss";
import Filter from "../../Components/Filter";
import CardGrid from "../../Components/Card/Card-grid";
import Tags from "../../Components/Tags";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const index = () => {
  return (
    <div className={styles.styledPost}>
      <div className={styles.styledSearch}>
        <div className={styles.search}>
          <img src="Images/search.png" alt="" className={styles.searchIcon} />
          <input
            className="search-bar"
            type="text"
            placeholder="Places, foods, location "
          />
          <img
            className={styles.closeIcon}
            src="/Images/close-search.png"
            alt=""
          />
        </div>
        <div className={styles.location}>
          <div className={styles.line}></div>
          <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
          <div className={styles.dropdown}>
            <select className="ui search dropdown">
              <option value="">Location</option>
              <option value="PY">Pondicherry</option>
              <option value="CN">Chennai</option>
              <option value="BN">Bangalore</option>
              <option value="KL">Kerala</option>
              <option value="HY">Hyderabad</option>
            </select>
          </div>
        </div>
      </div>
      <Filter />
      <div className={styles.content}>
        <CardGrid />
        <Tags />
      </div>
    </div>
  );
};

export default index;
