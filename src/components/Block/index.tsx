import React from "react";
import cn from "classnames";
import Link from 'next/link';
import styles from "./styles.module.css";

type Props = {
  title: string;
  icon: string;
  text: string;
  link: string;
};

const Block = ({ title, icon, text, link }: Props) => {
  return (
    <Link href={link} className={styles.block}>
      <span className={cn("material-symbols-rounded", [styles.icon])}>{icon}</span>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </Link>
  );
};

export default Block;
