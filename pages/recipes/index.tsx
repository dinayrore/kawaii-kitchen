import styles from "../../styles/Kitchen.module.css";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const Recipes = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>{/* <RecipeCard></RecipeCard> */}</div>
      </main>
    </div>
  );
};

export default Recipes;
