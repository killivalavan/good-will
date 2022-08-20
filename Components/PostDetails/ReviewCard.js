import styles from "./ReviewCard.module.scss";

const ReviewCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div className={styles.image}>
          <img src={data.user.image} alt="" />
        </div>
        <div className={styles.name}>
          <p>{data.user.username}</p>
          <small>{data.uploadedOn}</small>
        </div>
      </div>
      <div className={styles.body}>
        <p>{data.message}</p>
      </div>
      <span className={styles.reaction}>
        <img src={data.reaction.image} alt={data.reaction.status} />
      </span>
    </div>
  );
};

export default ReviewCard;
