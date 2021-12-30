import Header from "../../components/Header/Header";
import Text from "../../components/Inputs/Text/Text";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import groceries from "../api/groceries.json";
import styles from "../../styles/Kitchen.module.css";

const Refrigerator = () => {
  const [list, setList] = useState(groceries);

  return (
    <div className={styles.container}>
      <Header header="Refrigerator" />
      <Text />
      {list.map((product) => {
        return (
          <>
            <ul>
              <li id={product.id}>{product.name}</li>
            </ul>
          </>
        );
      })}
      <Footer />{" "}
    </div>
  );
};

export default Refrigerator;
