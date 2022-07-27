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
import { useRouter } from "next/router";
import PostDetails from "../../Components/PostDetails";

const Card = ({ post }) => {
  const [bookmark, setBookmark] = useState(false);

  const onclickHandler = () => {
    setBookmark(!bookmark);
  };

  const router = useRouter();
  const { postid } = router.query;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img src={post.image} alt={post.title} />
          {/* <Image src={post.image} alt={post.title} width={300} height={215} /> */}
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>
            <h3 className={styles.storeName}>
              <Link href={`/posts/?postid=${post.id}`} as={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </h3>
            <p className={styles.address}>{post.address}</p>
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
              <p>2,800</p>
            </div>
            <div className={styles.review}>
              <FontAwesomeIcon className={styles.icon} icon={faComment} />
              <p>30</p>
            </div>
            <div className={styles.likes}>
              <FontAwesomeIcon className={styles.icon} icon={faHeart} />
              <p>1,200</p>
            </div>
          </div>
        </div>
      </div>
      {router.query.postid && <PostDetails id={postid} />}
    </>
  );
};

export default Card;
