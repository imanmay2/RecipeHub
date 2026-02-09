"use client"
import React, { useState } from "react";
import dummyRecipes from "../Data/dummyData";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropDown";
import RecipeCard from "./RecipeCard";
import styles from "./css/recipelist.module.css";

const RecipeList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  const categories = [...new Set(dummyRecipes.map(r => r.category))];
  const levels = [...new Set(dummyRecipes.map(r => r.level))];

  const filteredRecipes = dummyRecipes.filter((recipe) => {
    return (
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === "" || recipe.category === category) &&
      (level === "" || recipe.level === level)
    );
  });

  return (
    <div>
      <div className={styles.controls}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterDropdown value={category} setValue={setCategory} options={categories} />
        <FilterDropdown value={level} setValue={setLevel} options={levels} />
      </div>

      <div className={styles.grid}>
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
