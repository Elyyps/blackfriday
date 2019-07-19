import * as React from "react";
import styles from "./homepage-header-component.module.scss";

import Slider, { Settings } from "react-slick";

import { CHEVRON_RIGHT } from "@app/constants/icons";
import { ArrowPanel, LabelComponent } from "@app/core";
import { getHomePageHeaderSetting } from "./slider-settings";
import { LinkComponent } from "@app/core/link";
import { HomepageHeader } from "@app/api/modules/homepage-header/homepage-header.module";

export interface IHomePageHeaderComponentProps {
  customNextArrow?: JSX.Element | undefined;
  customPrevArrow?: JSX.Element | undefined;
  homePageModule: HomepageHeader;
}

const HomePageHeaderComponent = (props: IHomePageHeaderComponentProps) => {
  const settings: Settings = getHomePageHeaderSetting(
    1,
    props.customNextArrow,
    props.customPrevArrow,
    styles["homepage-header__slick-slider"]
  );

  return (
    <div className={styles["homepage-header"]}>
      <div className={styles["homepage-header-top"]}>
        <div className="uk-container">
          <div className="uk-grid uk-child-width-1-2@m">
            <div>
              <div className={styles["homepage-header-wrap"]}>
                <LabelComponent text={"Black Friday 2019: NOG 10 dagen!"} />
                <div className={styles["homepage-header__title"]}>
                  <h1>
                    <strong>{props.homePageModule.title}</strong>
                  </h1>
                </div>
                <ul className={`uk-list-check ${styles["homepage-header__list"]}`}>
                  {props.homePageModule.description.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
                <div className={styles["homepage-header__cards"]}>
                  {props.homePageModule.arrowPanelslinks.map((panel, key) => (
                    <ArrowPanel key={key} title={panel.text.title} icon={panel.icon} link={panel.text.url} />
                  ))}
                </div>
              </div>
              <div className={`uk-invert ${styles["homepage-header-info"]}`}>
                <div className={styles["homepage-header-info__col"]}>
                  <div className={styles["homepage-header-info__label"]}>{props.homePageModule.startingDateText}</div>
                  <div className={styles["homepage-header-info__item"]}>
                    <h3>{props.homePageModule.startingDate}</h3>
                  </div>
                </div>
                <div className={styles["homepage-header-info__col"]}>
                  <div className={styles["homepage-header-info__label"]}>
                    {props.homePageModule.durationBlackFridayText}
                  </div>
                  <div className={styles["homepage-header-info__item"]}>
                    <h3>{props.homePageModule.durationBlackFriday}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Slider {...settings}>
                {props.homePageModule.slides.map((slide, index) => (
                  <div key={index} className={styles["homepage-header__slide-container"]}>
                    <div
                      style={{ backgroundImage: `url(${slide.image})` }}
                      className={styles["homepage-header__slider-item"]}
                    />
                    <div className={styles["homepage-header__slider-control"]}>
                      <div className={styles["homepage-header__slider-title"]}> {slide.title}</div>
                      <LinkComponent icon={CHEVRON_RIGHT} to={slide.link.url} animated variant={"quaternary"}>
                        {slide.link.title}
                      </LinkComponent>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["homepage-header-bottom"]}>
        <div className={`uk-invert ${styles["homepage-header-bottom__wrap"]}`}>
          <div className="uk-container">
            <div className="uk-grid uk-child-width-1-2@s">
              <div>
                <div className={styles["homepage-header-bottom__label"]}>
                  <h2>{props.homePageModule.popularProductsTitle}</h2>
                </div>
                <div className={styles["homepage-header-bottom__cards"]}>
                  {props.homePageModule.popularProducts.map((product, key) => (
                    <div key={key}>
                      <ArrowPanel title={product.text.title} icon={product.icon} link={product.text.url} />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className={styles["homepage-header-bottom__label"]}>
                  <h2>{props.homePageModule.popularStoresTitle}</h2>
                </div>
                <div className={styles["homepage-header-bottom__cards"]}>
                  {props.homePageModule.popularStores.map((store, key) => (
                    <div key={key}>
                      <ArrowPanel title={store.text.title} icon={store.icon} link={store.text.url} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomePageHeaderComponent };
