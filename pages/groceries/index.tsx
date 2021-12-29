import { useState } from "react";
import Header from "../../components/Header/Header";
import Checkbox from "../../components/Inputs/Checkbox/Checkbox";
import styles from "../../styles/Kitchen.module.css";
import groceries from "../api/groceries.json";

const Groceries = () => {
  const [list, setList] = useState(groceries);

  return (
    <div className={styles.container}>
      <Header header="Groceries" />

      {list.map((product) => {
        return (
          <>
            <Checkbox
              key={product.id}
              id={product.id}
              value=""
              label={product.name}
            />
          </>
        );
      })}
    </div>
  );
};

export default Groceries;
