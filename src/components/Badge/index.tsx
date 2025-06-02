import styles from "./styles.module.css";

type Props = {
  text: string;
};

const Badge = ({ text }: Props) => {
  return (
    <span className={styles.container}>
      <div className={styles.new}>{text}</div>
    </span>
  );
};

export default Badge;
