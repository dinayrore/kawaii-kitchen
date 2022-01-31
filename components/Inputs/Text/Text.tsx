import React, { ReactText } from "react";
import styles from "./Text.module.css";

interface TextProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Text: React.FC<TextProps> = ({ value, onChange, onKeyUp }) => {
  return (
    <input
      type="text"
      className={styles.text}
      placeholder=""
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
    />
  );
};

export default Text;
