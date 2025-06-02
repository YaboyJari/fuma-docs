import { PropsWithChildren } from "react";
import styles from "./styles.module.css";
import logo from "./images/logo.svg";

const SupportBlock = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <>{children}</>
    </div>
  );
};

export default SupportBlock;
