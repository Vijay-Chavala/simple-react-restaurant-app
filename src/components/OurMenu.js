import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import { MenuList } from "./pages/Home/Data";
import styles from "./Categories.module.css";

const allCategories = [
  "all",
  ...new Set(MenuList.map((item) => item.category)),
];

const OurMenu = () => {
  const [menuItems, setMenuItems] = useState(MenuList);

  const filterCategory = (category) => {
    if (category === "all") {
      setMenuItems(MenuList);
      return;
    }
    const newList = MenuList.filter((item) => item.category === category);
    setMenuItems(newList);
  };

  return (
    <main>
      <section>
        <div className={styles.section_center}>
          <h2>Our Menu</h2>
          <div className={styles.underline}></div>
        </div>
        <Categories
          allCategories={allCategories}
          filterCategory={filterCategory}
        />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};

export default OurMenu;
