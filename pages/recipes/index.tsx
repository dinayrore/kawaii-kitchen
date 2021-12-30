import { useState } from "react";
import Header from "../../components/Header/Header";
import Text from "../../components/Inputs/Text/Text";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import recipes from "../api/recipes.json";
import styles from "../../styles/Kitchen.module.css";
import Footer from "../../components/Footer/Footer";

const Recipes = () => {
  const [recipe] = useState(recipes);

  return (
    <div className={styles.container}>
      <Header header="Recipes" />
      <Text />
      <div className={styles.grid}>
        {recipe.map((item) => {
          return (
            <>
              <RecipeCard
                img={item.img}
                height={270}
                width={270}
                title={item.title}
                tags={item.tags}
                time={item.time}
                rating={item.rating}
                description={item.description}
              />
            </>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Recipes;
