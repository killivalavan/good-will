import styles from "./About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faShareSquare,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const AboutSection = ({ post }) => {
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
          <button>
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
            {<small>{post.likes}</small> || (
              <small className={styles.likes}>Like</small>
            )}
          </div>
        </div>
        <div className={styles.cardRightDiv}>
          <button className={styles.shareBtn}>
            <span>
              <FontAwesomeIcon icon={faShare} />
            </span>
            <p>Share</p>
          </button>
          <button className={styles.saveBtn}>
            <span>
              <FontAwesomeIcon icon={faBookmark} />
            </span>
            <p>Save post</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
