import styles from "./InfoPanel.module.css";

type InfoPanelProps = {
  id?: string;
  description?: string;
  dimensions?: string;
  createdAt?: string;
  imageDetails?: any;
};

export const InfoPanel = (props: InfoPanelProps) => {

  let moment = require('moment');

  // const { id, description, dimensions, createdAt } = props.imageDetails;
  const dimensions = `${props.imageDetails?.dimensions.height} X ${props.imageDetails?.dimensions.width}`;

  if (!props.imageDetails?.id) {
    return <aside className={styles.panel}></aside>;
  }

  return (
    <aside className={styles.panel}>
      <h2 className={styles.heading}>Block info</h2>
      <dl>
        <dt className={styles.title}>ID:</dt>
        <dd className={styles.details}>{props.imageDetails?.id}</dd>

        <dt className={styles.title}>Description:</dt>
        <dd className={styles.details}>{props.imageDetails?.description}</dd>

        <dt className={styles.title}>Dimensions:</dt>
        <dd className={styles.details}>{dimensions}</dd>

        <dt className={styles.title}>Created at:</dt>
        <dd className={styles.details}>{moment(props.imageDetails?.createdAt).format('MMMM DD YYYY')}</dd>
      </dl>
    </aside>
  );
};
