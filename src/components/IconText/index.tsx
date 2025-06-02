import cn from "classnames";
import styles from "./styles.module.css";

type Props = {
  icon: string;
  text: string;
};

const IconText = ({ text, icon }: Props) => {
  return (
    <span className={styles.container}>
      <span className={cn("material-symbols-rounded", [styles.icon])}>{icon}</span>
      <span className={styles.text}>{text}</span>
    </span>
  );
};

export default IconText;
