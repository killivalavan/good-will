import styles from "./Reviews.module.scss";
import ReviewCard from "./ReviewCard";

const Reviews = ({ post }) => {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h3>What customers say</h3>
          <p>({post.reviews.totalCount} Reviews)</p>
          <button>write review</button>
        </div>
        <div className={styles.grid}>
          {post.reviews.data.map((data) => (
            <ReviewCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
