import styles from "./About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faShareSquare } from "@fortawesome/free-solid-svg-icons";

const AboutSection = ({ post }) => {
  return (
    <div className={styles.shadow}>
      <div className={styles.background}>
        <div className={styles.title}>
          <div>
            <h1>{post.title}</h1>
            <p>
              Posted by{" "}
              <span>
                {post.postedBy.name}
                <img src="" alt="profile pic" />
              </span>
            </p>
          </div>
          <p>10, Ranga Pillai St, MG Road, Puducherry - 605001</p>
        </div>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src="" alt="Image" />
          </div>
          <div className={styles.details}>
            <div className={styles.about}>
              <h4>About</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis, similique!
              </p>
            </div>
            <div className={styles.tags}>
              <h4>Tags</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                mollitia.
              </p>
            </div>
          </div>
          <div className={styles.cardLeftDiv}>
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Like
              </button>
              <small>50</small>
            </div>
            <div className={styles.cardRightDiv}>
              <button>
                <FontAwesomeIcon icon={faShareSquare} />
                Share
              </button>
              <button>
                <FontAwesomeIcon icon={faBookmark} />
                Save post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
