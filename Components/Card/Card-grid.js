import Card from "./Card";
import styles from "./Card-grid.module.scss";
import { data } from "../../utils/card-data";
import { useRouter } from "next/router";
import PostDetails from "../../Components/PostDetails";

const CardContainer = () => {
  const router = useRouter();
  const { postid } = router.query;
  return (
    <>
      <div className={styles.cardGrid}>
        {data.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      {router.query.postid && <PostDetails id={postid} />}
    </>
  );
};

export default CardContainer;
