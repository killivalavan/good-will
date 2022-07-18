import Card from "./Card";
import styles from "./Card-grid.module.scss";
import { data } from "../../utils/card-data";

const CardContainer = () => {
  return (
    <div className={styles.cardGrid}>
      {data.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default CardContainer;
