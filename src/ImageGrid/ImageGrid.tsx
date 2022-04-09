import React, {useState} from 'react';
import styles from './ImageGrid.module.css';

import { Block } from '../blocks';

type ImageGridProps = {
  data?: Block;
  fetchEachImageDetails?: any;
};

export const ImageGrid = (props: ImageGridProps) => {

  const [selectedImage, setSelectedImage] = useState();

  const displayDetailsHandler = (eachImage: any) => {
    props.fetchEachImageDetails(eachImage);
    setSelectedImage(eachImage.options?.url);
  }

  let filteredImages = props.data?.children?.filter((element: any) => {
    if (Object.keys(element.options).length !== 0) {
      return true;
    }
    return false;
  });

  return (
    <div className={styles.imageGrid}>
      {
        filteredImages?.map((eachImage, index) => {
          return (
            <img
              src={eachImage.options?.url}
              alt={eachImage.type}
              className={selectedImage === eachImage.options?.url ? `${styles.eachImageStyle} ${styles.activeImage}` : styles.eachImageStyle }
              onClick={() => displayDetailsHandler(eachImage)}
              key={index}
            />
          )
        })
      }
    </div>
  )
};
