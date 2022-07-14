import classes from "../../styles/Posts.module.scss";

const index = () => {
  return (
    <div className={classes.styledPost}>
      <div className={classes.styledSearch}>
        <div className={classes.search}>
          <img src="Images/search.png" alt="" className="search-icon" />
          <input className="search-bar" type="text" />
        </div>
        <div className={classes.location}>
          <img src="Images/location.png" alt="" className="dropdown-icon" />
          <h4>Dropdown</h4>
        </div>
      </div>
    </div>
  );
};

export default index;
