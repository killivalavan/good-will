import styles from "./Reviews.module.scss";
import ReviewCard from "./ReviewCard";
import WriteReview from "./WriteReview";
import { useState } from "react";
import { useRouter } from "next/router";

const Reviews = ({ post }) => {
  const [toggle, setToggle] = useState(false);
  const reviewHandler = () => {
    setToggle(!toggle);
  };

  const router = useRouter();
  const onShadowClose = (e) => {
    {
      e.target.classList.contains("WriteReview_modal__azlo0") &&
        setToggle(false);
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h3>What customers say</h3>
          <p>({post.reviews.totalCount} Reviews)</p>
          <button onClick={reviewHandler}>write review</button>
        </div>
        <div className={styles.grid}>
          {post.reviews.data.map((data) => (
            <ReviewCard key={data.id} data={data} />
          ))}
        </div>
        {toggle && <WriteReview onShadowClose={onShadowClose} />}
        <h4 className={styles.loadMore}>Load more</h4>
      </div>
    </div>
  );
};

export default Reviews;
