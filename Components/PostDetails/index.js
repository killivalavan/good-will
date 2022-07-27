import React from "react";
import { data } from "../../utils/card-data";
import styles from "./PostDetails.module.scss";
import About from "../PostDetails/About";

const PostDetails = ({ id }) => {
  const post = data.find((data) => data.id === id);

  return (
    <>
      <About post={post} />
    </>
  );
};

export default PostDetails;
