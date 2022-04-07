import logo from './simpplr.svg';
import styles from './App.module.css';

import { getBlocks } from './blocks';

import { InfoPanel } from './InfoPanel/InfoPanel';
import { ImageGrid } from './ImageGrid/ImageGrid';

export const App = () => {
  return (
    <div>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
      </header>
      <main>
        <ImageGrid />
        <InfoPanel />
      </main>
    </div>
  );
};
