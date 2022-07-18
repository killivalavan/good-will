import styles from "./Filter.module.scss";

const Filter = () => {
  return (
    <div>
      <div className={styles.filter}>
        {["Relevance", "Popularity", "Most Liked", "Last Updated"].map(
          (filter) => (
            <div key={filter} className={styles.filterBtn}>
              <a href="">{filter}</a>
              <span>|</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Filter;
