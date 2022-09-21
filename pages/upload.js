import styles from "../styles/upload.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faArrowLeft,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import ImageUploader from "../Components/ImageUploader";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FormTag from "../Components/FormTag";

const Upload = () => {
  const router = useRouter();

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  // Country Selector
  const [country, setCountry] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://geolocation-db.com/json/50ad4a90-fd5e-11ec-b463-1717be8c9ff1"
      );
      setCountry(data.country_name);
    };
    getData();
  }, []);

  let [imageUrl, setImageUrl] = useState();

  const uploadHandler = async (e) => {
    const url = await e.target.files[0];
    setImageUrl(url);
    console.log(imageUrl);
  };

  return (
    <div className={styles.content}>
      <div className={styles.backBtn}>
        <span>
          <FontAwesomeIcon
            onClick={() => router.back()}
            size="2x"
            icon={faArrowLeft}
          />
        </span>
        <h2>New Post</h2>
      </div>
      <form onSubmit={onSubmitHandler} action="">
        <input type="file" onChange={uploadHandler} />

        <div className={styles.card}>
          <div className={`${styles.leftDiv} ${styles.comFlex}`}>
            {/* <img src="./Images/image1.png" alt="" /> */}
            <ImageUploader />
          </div>
          <div className={`${styles.centerDiv} ${styles.comFlex}`}>
            <p>Basic Information</p>
            <input type="text" placeholder="Title *" />
            <textarea
              name="description"
              id=""
              cols="30"
              rows="5"
              placeholder="About the store *"
            ></textarea>
            <FormTag />
          </div>
          <div className={`${styles.comFlex} ${styles.rightDiv}`}>
            <p>Address</p>
            <input
              className={styles.street}
              type="text"
              name="street"
              id="street"
              placeholder="Street *"
            />
            <input type="text" name="city" id="city" placeholder="City *" />
            <div className={styles.downDiv}>
              <div className={styles.downLeftDiv}>
                <input
                  type="text"
                  name="country"
                  className={styles.country}
                  placeholder="Country *"
                  defaultValue={country}
                />

                <input
                  type="text"
                  name="landmark1"
                  id="landmark1"
                  placeholder="Landmark 1 *"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="pincode"
                  id="city"
                  placeholder="Pincode *"
                />
                <input
                  type="text"
                  name="landmark2"
                  id="landmark2"
                  placeholder="Landmark 2"
                />
              </div>
            </div>
            <div className={styles.location}>
              <p>Google Location</p>
              <button>Pin the exact loaction</button>
              <FontAwesomeIcon icon={faLocationCrosshairs} />
              <small>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              </small>
            </div>
          </div>
        </div>
        <button className={styles.submitBtn}>
          <span>
            <FontAwesomeIcon
              transform={{ rotate: 270 }}
              icon={faArrowRightFromBracket}
            />
          </span>
          Submit
        </button>
      </form>
    </div>
  );
};

export async function getStaticProps() {
  // Uploading images to S3

  return {
    props: {},
  };
}

export default Upload;
