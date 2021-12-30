import { useState } from "react";
import Header from "../../components/Header/Header";
import Checkbox from "../../components/Inputs/Checkbox/Checkbox";
import Text from "../../components/Inputs/Text/Text";
import Footer from "../../components/Footer/Footer";
import groceries from "../api/groceries.json";
import styles from "../../styles/Kitchen.module.css";

const Groceries = () => {
  const [list, setList] = useState(groceries);

  return (
    <div className={styles.container}>
      <Header header="Groceries" />
      <Text />
      {list.map((product) => {
        return (
          <>
            <ul>
              <Checkbox
                key={product.id}
                id={product.id}
                value=""
                label={product.name}
              />
            </ul>
          </>
        );
      })}
      <Footer />
    </div>
  );
};

export default Groceries;
