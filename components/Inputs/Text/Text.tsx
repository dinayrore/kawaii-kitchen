import { useState } from "react";
import styles from "./Text.module.css";

interface TextProps {}

const Text: React.FC<TextProps> = () => {
  const [text, onChange] = useState();

  return <input type="text" className={styles.text} placeholder="" />;
};

export default Text;
