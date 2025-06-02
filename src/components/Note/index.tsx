import cn from "classnames";
import { Remarkable } from "remarkable"
import styles from "./styles.module.css";

var md = new Remarkable();

type Props = {
  type: "note" | "caution" | "warning" | "success";
  text: string;
};

const Note = ({ type = "note", text }: Props) => {
  return (
    <aside className={cn(styles.noteContainer, [styles[type]])}>
      <b>{type.charAt(0).toUpperCase() + type.slice(1)}:</b>{" "}
      <span className={styles.noteText}
        dangerouslySetInnerHTML={{ __html: md.render(text) }}
      />
    </aside>
  );
};

export default Note;
