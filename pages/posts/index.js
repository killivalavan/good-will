import styles from "../../styles/Posts.module.scss";
import Filter from "../../Components/Filter";
import CardGrid from "../../Components/Card/Card-grid";
import Tags from "../../Components/Tags";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useState } from "react";

const index = () => {
  const [location, setLocation] = useState("Select your location");
  const [toggle, setToggle] = useState(true);

  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");

  // Dropdown toggler
  const onclickHandler = (e) => {
    setLocation(e.target.innerHTML);
    setToggle(!toggle);
  };

  const toogleHandler = () => {
    setToggle(!toggle);
  };

  // Form submit handler
  const onSubmitHandler = (e) => {
    // console.log(e.target);
    e.preventDefault();
  };

  // Scroll Fix
  const { pathname } = useRouter();
  if (pathname === "/posts") {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  return (
    <div className={styles.styledPost}>
      <div>
        <form
          onSubmit={onSubmitHandler}
          className={styles.styledSearch}
          action=""
        >
          <div className={styles.search}>
            <img src="Images/search.png" alt="" className={styles.searchIcon} />
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="search-bar"
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
            <div onClick={toogleHandler} className={styles.dropdown}>
              <span onChange={(e) => setCity(e.target.value)} type="text">
                {location}
              </span>
              <div
                onClick={onclickHandler}
                className={styles.dropdownList}
                disabled={toggle}
              >
                <div value="PY">Pondicherry</div>
                <div value="CN">Chennai</div>
                <div value="BG">Bangalore</div>
                <div value="KL">Kerala</div>
                <div value="HY">Hyderabad</div>
              </div>
            </div>
          </div>
        </form>
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
