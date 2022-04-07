import React from 'react';
import styles from './ImageGrid.module.css';

import { Block } from '../blocks';

type ImageGridProps = {
  data?: Block;
  fetchEachImageDetails?: any;
};

export const ImageGrid = (props: ImageGridProps) => {

  const displayDetailsHandler = (eachImage: object) => {
    props.fetchEachImageDetails(eachImage);
  }

  return (
    <div className={styles.imageGrid}>
      {
        props.data?.children?.map((eachImage, index) => {
          return (
            <img
              src={eachImage.options?.url}
              alt={eachImage.type}
              className={styles.eachImage}
              onClick={() => displayDetailsHandler(eachImage)}
              key={index}
            />
          )
        })
      }
    </div>
  )
};
