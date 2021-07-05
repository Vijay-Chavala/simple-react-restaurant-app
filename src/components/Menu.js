import React from "react";
import styles from "./Menu.module.css";


const Menu = ({ menuItems }) => {
  return (
    <section>
      <p>Number of Items : {menuItems.length}</p>
      <div className={styles.section_center}>
        {menuItems.map((item) => {
          const { id, img, name } = item;

          return (
            <article key={id} className={styles.menu_item}>
              <div className={styles.img_container}>
                <img className={styles.photo} src={img} alt="food" />
              </div>
              <h3>{name}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
