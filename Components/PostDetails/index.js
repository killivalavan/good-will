import React from "react";
import { data } from "../../utils/card-data";
import styles from "./PostDetails.module.scss";
import About from "../PostDetails/About";
import Location from "../PostDetails/Location";
import Reviews from "../PostDetails/Reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const PostDetails = ({ id }) => {
  const post = data.find((data) => data.id === id);
  // console.log(post);

  const router = useRouter();

  // Close Model
  const onButtonClose = () => {
    router.push("/posts");
  };

  const onShadowClose = (e) => {
    {
      e.target.classList.contains("PostDetails_shadow__U_AP_") &&
        onButtonClose();
    }
  };

  return (
    <>
      {/* {post && ( */}
      <div onClick={onShadowClose} className={styles.shadow}>
        <div className={styles.background}>
          <div className={styles.close}>
            <span onClick={onButtonClose}>
              <FontAwesomeIcon icon={faXmark} />
            </span>
          </div>
          <About post={post} />
          <Location post={post} />
          <Reviews post={post} />
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default PostDetails;
