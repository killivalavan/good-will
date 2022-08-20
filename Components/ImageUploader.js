import styles from "./ImageUploader.module.scss";
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";

import { PlusCircleIcon } from "@heroicons/react/outline";

export default function About() {
  const [images, setImages] = useState([]);
  const maxNumber = 2;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "png", "jpeg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
          errors,
        }) => (
          // write your building UI
          <div className={styles.upload__image}>
            <button
              className={styles.uploadBtn}
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              <span>
                <PlusCircleIcon className="h-5 w-5 text-blue-500" />
              </span>
              <p>Image</p>
              <small>(Max 2)</small>
            </button>
            {/* &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button> */}
            <div className={styles.wrapper}>
              {imageList.map((image, index) => (
                <div key={index} className={styles.imageItem}>
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className={styles.imageBtn}>
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            {errors && (
              <div className={styles.errors}>
                {errors.maxNumber && (
                  <span>Number of selected images exceed maxNumber</span>
                )}
                {errors.acceptType && (
                  <span>Your selected file type is not allow</span>
                )}
                {errors.maxFileSize && (
                  <span>Selected file size exceed maxFileSize</span>
                )}
                {errors.resolution && (
                  <span>
                    Selected file is not match your desired resolution
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
