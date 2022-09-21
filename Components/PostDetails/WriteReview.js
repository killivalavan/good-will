import React, { useState } from "react";
import styles from "./WriteReview.module.scss";

const WriteReview = ({ onShadowClose }) => {
  const [reaction, setReaction] = useState("happy");
  const [comment, setComment] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div onClick={onShadowClose} className={styles.modal}>
      <form onSubmit={onSubmitHandler} className={styles.modalContent}>
        <h2>Create Review</h2>
        <figure className={styles.proPic}>
          <img src="/Images/user.jpg" alt="profile picture" />
        </figure>
        <h3>Sunil Dev</h3>

        <div className={styles.reactions}>
          <div className={styles.happy}>
            <input
              type="radio"
              name="smiley"
              id="happy"
              value="happy"
              defaultChecked
              onChange={(e) => setReaction(e.target.value)}
            />
            <label htmlFor="happy">Happy</label>
          </div>
          <div className={styles.good}>
            <input
              type="radio"
              name="smiley"
              id="good"
              value="good"
              onChange={(e) => setReaction(e.target.value)}
            />
            <label htmlFor="good">Good</label>
          </div>
          <div className={styles.average}>
            <input
              type="radio"
              name="smiley"
              id="average"
              value="average"
              onChange={(e) => setReaction(e.target.value)}
            />
            <label htmlFor="average">Average</label>
          </div>
          <div className={styles.sad}>
            <input
              type="radio"
              name="smiley"
              id="sad"
              value="sad"
              onChange={(e) => setReaction(e.target.value)}
            />
            <label htmlFor="sad">Sad</label>
          </div>
        </div>
        <textarea
          onChange={(e) => setComment(e.target.value)}
          name=""
          id=""
          cols="30"
          rows="7"
          placeholder="Add your review here"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WriteReview;
