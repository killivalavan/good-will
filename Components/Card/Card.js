import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faHeart,
  faEye,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import { useRouter } from "next/router";

const Card = ({ post }) => {
  const [bookmark, setBookmark] = useState(false);
  const [seen, setSeen] = useState(1);

  const onclickHandler = () => {
    setBookmark(!bookmark);
  };

  // Seen event handler
  const SeenHandler = () => {
    setSeen((prevState) => prevState + 1);
  };

  // Scroll Fix
  // if (typeof window !== "undefined") {
  // const { pathname } = useRouter();
  //   if (pathname === "/posts") {
  //     document.body.style.overflow = "auto";
  //   } else {
  //     document.body.style.overflow = "hidden";
  //   }
  // }

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img src={post.image} alt={post.title} />
          {/* <Image src={post.image} alt={post.title} width={300} height={215} /> */}
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>
            <h3 onClick={SeenHandler} className={styles.storeName}>
              <Link href={`/posts/?postid=${post.id}`} as={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </h3>
            <p className={styles.address}>
              {post.address.street}, {post.address.city}
            </p>
          </div>
          <hr />
          <div className={styles.user}>
            <div className={styles.userIcon}>
              <img src={post.postedBy.image} alt="icon" />
            </div>
            <h5 className={styles.name}>{post.postedBy.name}</h5>
          </div>
          <div className={styles.info}>
            <div
              onClick={onclickHandler}
              className={styles.favorite}
              disabled={bookmark}
            >
              <FontAwesomeIcon className={styles.icon} icon={faBookmark} />
              <span> |</span>
            </div>

            <div className={styles.seen}>
              <FontAwesomeIcon className={styles.icon} icon={faEye} />
              <p>{post.seen}</p>
            </div>
            <div className={styles.review}>
              <FontAwesomeIcon className={styles.icon} icon={faComment} />
              {post.reviews && <p>{post.reviews.totalCount}</p>}
            </div>
            <div className={styles.likes}>
              <FontAwesomeIcon className={styles.icon} icon={faHeart} />
              <p>{post.likes}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
