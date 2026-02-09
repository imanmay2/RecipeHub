import React from "react";
import styles from "./css/recipecard.module.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className={styles.card}>
      <img src={recipe.image} alt={recipe.title} className={styles.image} />

      <div className={styles.content}>
        <span className={styles.category}>{recipe.category}</span>
        <h3>{recipe.title}</h3>

        <div className={styles.meta}>
          <span>{recipe.time} mins</span>
          <span className={styles.level}>{recipe.level}</span>
        </div>

        <button className={styles.button}>View Recipe</button>
      </div>
    </div>
  );
};

export default RecipeCard;
