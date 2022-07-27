import styles from "../styles/upload.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faArrowLeft,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import ImageUploader from "../Components/ImageUploader";

import FormTag from "../Components/FormTag";

const upload = () => {
  const router = useRouter();

  const onSubmitHandler = (e) => {
    e.preventDefault();
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
            {/* <input type="text" placeholder="Tags/favourite" /> */}

            {/*  */}

            <FormTag />
            {/* <div>
              <TagsInput
                className={styles.tags}
                value={selected}
                onChange={setSelected}
                name="tags"
                placeHolder="Tags/favourite"
              />
              <em>press enter to add new tag</em>
              <style jsx>{`
                .tags.go2761622576 {
                  display: none !important;
                }
                .rti--container {
                  --rti-main: "#6ef400";
                }
              `}</style>
            </div> */}

            {/*  */}
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
                  id="country"
                  placeholder="Country *"
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

export default upload;
