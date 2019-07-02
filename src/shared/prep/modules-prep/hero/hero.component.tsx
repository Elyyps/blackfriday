import * as React from "react";
import styles from "./hero-component.module.scss";
import { CardSimple, IconComponent } from "@app/prep/modules-prep/core";
import { BasicArrow } from "./basic-arrow.component";
import Slider, { Settings } from "react-slick";
import CardIcon from "@assets/icons/store.svg";
import Oasis from "@assets/oasis.jpg";
import { CHEVRON_RIGHT } from "@app/constants/icons";
import { Link } from "react-router-dom";

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
  const settings: Settings = {
    className: `${styles["hero__slick-slider"]}`,
    nextArrow: <BasicArrow />,
    prevArrow: <BasicArrow prev={true} />,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ],
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500
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
  const sliceNumber = 2;

  return (
    <>
      <div className={styles["hero"]} style={style}>
        <div className={styles["hero-top"]}>
          <div className="uk-container">
            <div className="uk-grid uk-child-width-1-2@m">
              <div>
                <div className={styles["hero-wrap"]}>
                  <div className={styles["hero__label"]}>Black Friday 2019: NOG 10 dagen!</div>
                  <div className={styles["hero__title"]}>
                    <h1>
                      <strong>Black Friday België</strong>
                    </h1>
                  </div>
                  <ul className={`uk-list-check ${styles["hero__list"]}`}>
                    <li>Overzicht van alle Black Friday winkels</li>
                  </ul>
                  <div className={styles["hero__cards"]}>
                    {cards.slice(sliceNumber).map((item, key) => (
                      <CardSimple key={key} {...item} />
                    ))}
                  </div>
                </div>
                <div className={`uk-invert ${styles["hero-info"]}`}>
                  <div className={styles["hero-info__col"]}>
                    <div className={styles["hero-info__label"]}>Wanneer is Black Friday</div>
                    <div className={styles["hero-info__item"]}>
                      <h3>29 November 2019</h3>
                    </div>
                  </div>
                  <div className={styles["hero-info__col"]}>
                    <div className={styles["hero-info__label"]}>Hoe lang nog?</div>
                    <div className={styles["hero-info__item"]}>
                      <h3>6 maanden & 2 dagen</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Slider {...settings}>
                  <div>
                    <div style={{ backgroundImage: `url(${Oasis})` }} className={styles["hero__slider-item"]}>
                      <div className={styles["hero__slider-title"]}>Handige Black Friday Tips</div>
                      <Link to="#" className={styles["hero__slider-button"]}>
                        Lees meer
                        <IconComponent icon={CHEVRON_RIGHT} size={"4px"} />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div style={{ backgroundImage: `url(${Oasis})` }} className={styles["hero__slider-item"]}>
                      <div className={styles["hero__slider-title"]}>Handige Black Friday Tips</div>
                      <Link to="#" className={styles["hero__slider-button"]}>
                        Lees meer
                        <IconComponent icon={CHEVRON_RIGHT} size={"5px"} />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div style={{ backgroundImage: `url(${Oasis})` }} className={styles["hero__slider-item"]}>
                      <div className={styles["hero__slider-title"]}>Handige Black Friday Tips</div>
                      <Link to="#" className={styles["hero__slider-button"]}>
                        Lees meer
                        <IconComponent icon={CHEVRON_RIGHT} size={"5px"} />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div style={{ backgroundImage: `url(${Oasis})` }} className={styles["hero__slider-item"]}>
                      <div className={styles["hero__slider-title"]}>Handige Black Friday Tips</div>
                      <Link to="#" className={styles["hero__slider-button"]}>
                        Lees meer
                        <IconComponent icon={CHEVRON_RIGHT} size={"8px"} />
                      </Link>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["hero-bottom"]}>
          <div className={`uk-invert ${styles["hero-bottom__wrap"]}`}>
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
      </div>
    </>
  );
};

export { HeroComponent };
