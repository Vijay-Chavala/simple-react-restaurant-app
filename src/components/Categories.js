import React from "react";
import styles from "./Categories.module.css";

const Categories = ({ filterCategory, allCategories }) => {
  return (
    <div className={styles.btn_Container}>
      {allCategories.map((category, index) => {
        return (
          <button
            className={styles.catBtn}
            key={index}
            onClick={() => filterCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
