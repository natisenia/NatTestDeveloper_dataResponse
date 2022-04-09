import React, { useState, useEffect } from 'react';
import logo from './simpplr.svg';
import styles from './App.module.css';
import ClipLoader from "react-spinners/ClipLoader";

import { Block, getBlocks } from './blocks';

import { InfoPanel } from './InfoPanel/InfoPanel';
import { ImageGrid } from './ImageGrid/ImageGrid';

export const App = () => {

  const [data, setData] = useState<Block>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageDetails, setImageDetails] = useState<object>();

  useEffect(() => {
    getBlocks()
      .then((newData) => {
        setData(newData);
      })
      .catch((error) => {
        setError(error.message);
        setData(undefined);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const fetchEachImageDetails = (imageData: any) => {
    const extractedImageData = {
      id: imageData.id,
      description: imageData.data.description,
      dimensions: `${imageData.data.height} X ${imageData.data.width}`,
      createdAt: imageData.data.createdAt
    }
    setImageDetails(extractedImageData);
  }

  return (
    <div>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
      </header>
      <main>
        <ImageGrid data={data} fetchEachImageDetails={fetchEachImageDetails} />
        <InfoPanel imageDetails={imageDetails} />
      </main>
      {error}
      <ClipLoader color='#00e1ff' loading={loading} css={styles.loaderStyles} size={100} />
    </div>
  );
};
