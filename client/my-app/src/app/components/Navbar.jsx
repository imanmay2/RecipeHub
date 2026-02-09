import React from "react";
import styles from "./css/navbar.module.css";
import { FaUtensils, FaPlus, FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.logoContainer}>
        <div className={styles.logoIcon}>
          <FaUtensils />
        </div>
        <h1 className={styles.logoText}>RecipeHub</h1>
      </div>

      {/* Navigation Links */}
      <div className={styles.navLinks}>
        <button className={`${styles.navItem} ${styles.active}`}>
          <span className={styles.icon}><FaUtensils /></span>
          Home
        </button>

        <button className={styles.navItem}>
          <span className={styles.icon}><FaPlus /></span>
          Add Recipe
        </button>

        <button className={styles.navItem}>
          <span className={styles.icon}><FaHeart /></span>
          Favorites
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
