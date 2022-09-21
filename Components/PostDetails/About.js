import styles from "./About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faShareSquare,
  faShare,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";

const AboutSection = ({ post }) => {
  const [heart, setHeart] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const onClickHeart = () => {
    setHeart(!heart);
  };

  const onClickBookmark = () => {
    setBookmark(!bookmark);
  };

  //Share button
  const onShareClick = () => {
    navigator["share"]({
      title: document.title,
      text: "Share!",
      url: window.location.href,
    })
      .then(() => console.log("Successful share"))
      .catch((err) => console.error(err));
  };

  return (
    <div className={styles.background}>
      <div className={styles.title}>
        <div className={styles.postedBy}>
          <h2>{post.title}</h2>
          <p>
            Posted by <strong> {post.postedBy.name}</strong>
            <img src={post.postedBy.image} alt="profile pic" />
          </p>
        </div>
        <p>
          {post.address.street}, {post.address.city} - {post.address.pincode}
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={post.image} alt="Image" />
        </div>
        <div className={styles.details}>
          <div className={styles.about}>
            <h4>About</h4>
            <p>{post.about}</p>
          </div>
          <div className={styles.tags}>
            <h4>Tags</h4>
            {post.tags.map((tag) => (
              <p key={tag.id}>{tag.name}</p>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.cardBottom}>
        <div className={styles.leftDiv}>
          <button
            onClick={onClickHeart}
            style={{ color: heart ? "red" : "grey" }}
            className={styles.heartIcon}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className={styles.heart}>
            {heart ? (
              <small>{post.likes}</small>
            ) : (
              <small className={styles.likes}>Like</small>
            )}
          </div>
        </div>
        <div className={styles.cardRightDiv}>
          <button onClick={onShareClick} className={styles.shareBtn}>
            <div className={styles.share}>
              <Image
                height={100}
                width={100}
                src="/Images/share-black.png"
                alt="bookmark1"
              />
              {/* <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> */}
            </div>
            <p>Share</p>
          </button>
          <button onClick={onClickBookmark} className={styles.saveBtn}>
            {bookmark ? (
              <div className={styles.bookmark}>
                <Image
                  height={100}
                  width={100}
                  src="/Images/bookmark1.png"
                  alt="bookmark1"
                />
              </div>
            ) : (
              <div className={styles.bookmark}>
                <Image
                  height={100}
                  width={100}
                  src="/Images/bookmark2.png"
                  alt="bookmark2"
                />
              </div>
            )}
            {/* <FontAwesomeIcon icon={faBookmark} /> */}

            <p>Save Post</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
