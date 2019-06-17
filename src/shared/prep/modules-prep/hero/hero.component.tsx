import * as React from "react";
import styles from "./hero-component.module.scss";
import { CardSimple } from "@app/prep/modules-prep/core";
// import Slider from "react-slick";
import CardIcon from "@assets/icons/store.svg";

export interface IHeroComponentProps {
  bgcolor?: string;
  cards?: any;
  customNextArrow?: JSX.Element | undefined;
  customPrevArrow?: JSX.Element | undefined;
}

const HeroComponent = (props: IHeroComponentProps) => {
  const style = {
    backgroundColor: props.bgcolor,
    cards: props.cards
  };

  const cards = [
    {
      title: "Productdeals",
      icon: CardIcon
    },
    {
      title: "Productdeals 2",
      icon: CardIcon
    },
    {
      title: "Productdeals 2",
      icon: CardIcon
    },
    {
      title: "Productdeals 2",
      icon: CardIcon
    }
  ];

  return (
    <React.Fragment>
      <div className={styles["hero"]} style={style}>
        <div className="uk-container">
          <div className="uk-grid uk-child-width-1-2@s">
            <div>
              <div className={styles["hero__label"]}>
                Black Friday 2019: NOG 10 dagen!
              </div>
              <div className={styles["hero__title"]}>
                <h1>
                  <strong>Black Friday België</strong>
                </h1>
              </div>
              <ul className={`uk-list-check ${styles["hero__list"]}`}>
                <li>Overzicht van alle Black Friday winkels</li>
              </ul>
              <div className={styles["hero__cards"]}>
                {cards.map((item, key) => (
                  <CardSimple key={key} {...item} />
                ))}
              </div>
              <div className={styles["hero-info"]}>
                <div>
                  <div className={styles["hero-info__label"]}>
                    Wanneer is Black Friday
                  </div>
                  <div className={styles["hero-info__item"]}>
                    <h3>29 November 2019</h3>
                  </div>
                </div>
                <div>
                  <div className={styles["hero-info__label"]}>
                    Hoe lang nog?
                  </div>
                  <div className={styles["hero-info__item"]}>
                    <h3>6 maanden & 2 dagen</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>slider</div>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="uk-container">
            <div className="uk-grid uk-child-width-1-2@s">
              <div>
                <div className={styles["hero-bottom__label"]}>
                  <h2>Populaire onderwerpen</h2>
                </div>
                <div className={styles["hero-bottom__cards"]}>
                  {cards.map((item, key) => (
                    <CardSimple key={key} {...item} />
                  ))}
                </div>
              </div>
              <div>
                <div className={styles["hero-bottom__label"]}>
                  <h2>Populaire winkels</h2>
                </div>
                <div className={styles["hero-bottom__cards"]}>
                  {cards.map((item, key) => (
                    <CardSimple key={key} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { HeroComponent };
