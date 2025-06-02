import styles from "./styles.module.css";

type Props = {
  number: number | string;
};

const NumberContainer = ({ number }: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.circle}>
        <span>{number}</span>
      </span>
    </div>
  );
};

export default NumberContainer;
