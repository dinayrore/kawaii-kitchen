import Header from "../../components/Header/Header";
import Text from "../../components/Inputs/Text/Text";
import Footer from "../../components/Footer/Footer";
import groceries from "../api/groceries.json";
import { useEffect, useState } from "react";
import styles from "../../styles/Kitchen.module.css";

const Pantry = () => {
  const [list, setList] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  return (
    <div className={styles.container}>
      <Header header="Pantry" />
      <Text
        value={newItem}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            setList([...list, newItem]);
            // clear text box
            setNewItem("");
          }
        }}
      />
      {list.map((product) => {
        return (
          <>
            <ul>
              <li>{product}</li>
            </ul>
          </>
        );
      })}
      <Footer />
    </div>
  );
};

export default Pantry;
