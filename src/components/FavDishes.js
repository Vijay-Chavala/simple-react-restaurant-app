import React from "react";
import styles from "./FavDishes.module.css";

const FavDishes = ({ mainText, subText, itemCards, bgImg }) => {
  return (
    <div>
      <main>
        <div
          className={styles.container}
          style={{
            background: `linear-gradient(to right,rgba(225, 165, 80, 0.5) 0%,rgba(0 ,0,0, 0.3) 100%),url(${bgImg})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className={styles.textContent}>
            <h2>{mainText}</h2>
            <p>{subText}</p>
          </div>
          <div className={styles.row}>
            {itemCards.map((card) => {
              const { id, img, dishName, price } = card;
              return (
                <div className={styles.itemCard} key={id}>
                  <div className={styles.imgContainer}>
                    <img src={img} alt="dishImage" />
                    <h3>{dishName}</h3>
                    <p>{price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FavDishes;
