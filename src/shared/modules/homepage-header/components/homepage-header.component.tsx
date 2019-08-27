import * as React from "react";
import styles from "./homepage-header-component.module.scss";
import Slider, { Settings } from "react-slick";
import { CHEVRON_RIGHT, PLAY_BUTTON } from "@app/constants/icons";
import { ArrowPanel, LabelComponent, IconComponent } from "@app/core";
import { getHomePageHeaderSetting } from "./slider-settings";
import { LinkComponent } from "@app/core/link";
import { HomepageHeader } from "@app/api/modules/homepage-header/homepage-header.module";
import { ModalComponent } from "@app/core/modal";
import ReactPlayer from "react-player";
import { HomePageHeaderContainerProps } from "../containers/homepage-header-container";
import { IBlackFridayDate, IBlackFridayRootURL } from "@app/stores/settings";

import { CountDownContainer } from "@app/core/count-down/containers/count-down-containers";

export interface IHomePageHeaderComponentProps {
  customNextArrow?: JSX.Element | undefined;
  customPrevArrow?: JSX.Element | undefined;
  homePageModule: HomepageHeader;
}

const HomePageHeaderComponent = (props: IHomePageHeaderComponentProps & HomePageHeaderContainerProps) => {
  const settings: Settings = getHomePageHeaderSetting(
    1,
    props.customNextArrow,
    props.customPrevArrow,
    styles["homepage-header__slick-slider"]
  );

  return (
    <div className={styles["homepage-header"]}>
      {`${(props.blackFridayRootUrl as IBlackFridayRootURL).rootUrl}`}
      <div className={styles["homepage-header-top"]}>
        <div className="uk-container">
          <div className="uk-grid uk-child-width-1-2@m">
            <div>
              <div className={styles["homepage-header-wrap"]}>
                <LabelComponent>
                  <React.Fragment>
                    {`Black Friday ${(props.blackFridayDate as IBlackFridayDate).year}: `}
                    <CountDownContainer />
                  </React.Fragment>
                </LabelComponent>
                <div className={styles["homepage-header__title"]}>
                  <h1>{props.homePageModule.title}</h1>
                </div>
                <ul className={`uk-list-check ${styles["homepage-header__list"]}`}>
                  {props.homePageModule.description.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
                <div className={styles["homepage-header__cards"]}>
                  {props.homePageModule.arrowPanelslinks.map((panel, key) => (
                    <ArrowPanel
                      key={key}
                      link={{ title: panel.link.title, url: panel.link.url }}
                      icon={panel.icon}
                      image={panel.image}
                    />
                  ))}
                </div>
              </div>
              <div className={`uk-invert ${styles["homepage-header-info"]}`}>
                <div className={styles["homepage-header-info__col"]}>
                  <div className={styles["homepage-header-info__label"]}>{props.homePageModule.startingDateText}</div>
                  <div className={styles["homepage-header-info__item"]}>
                    <h3>{`29 November ${(props.blackFridayDate as IBlackFridayDate).year}`}</h3>
                  </div>
                </div>
                <div className={styles["homepage-header-info__col"]}>
                  <div className={styles["homepage-header-info__label"]}>
                    {props.homePageModule.durationBlackFridayText}
                  </div>
                  <div className={styles["homepage-header-info__item"]}>
                    <h3>
                      <CountDownContainer isFullVersion={true} />
                    </h3>
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
                    {slide.video && (
                      <div className={styles["homepage-header__slider-item-video"]}>
                        <ModalComponent
                          isTriggerOnClick
                          variant={"full-screen"}
                          modalBackground={"transparent"}
                          trigger={<IconComponent icon={PLAY_BUTTON} size={"80px"} />}
                        >
                          <ReactPlayer url={slide.video} height={"100%"} width={"100%"} playing controls />
                        </ModalComponent>
                      </div>
                    )}

                    {slide.title && (
                      <div className={styles["homepage-header__slider-control"]}>
                        <div className={styles["homepage-header__slider-title"]}> {slide.title}</div>
                        <LinkComponent icon={CHEVRON_RIGHT} to={slide.link.url} animated variant={"quaternary"}>
                          {slide.link.title}
                        </LinkComponent>
                      </div>
                    )}
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
                      <ArrowPanel
                        key={key}
                        link={{ title: product.link.title, url: product.link.url }}
                        image={product.image}
                        icon={product.icon}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles["homepage-header-bottom__cards-container"]}>
                <div className={styles["homepage-header-bottom__label"]}>
                  <h2>{props.homePageModule.popularStoresTitle}</h2>
                </div>
                <div className={styles["homepage-header-bottom__cards"]}>
                  {props.homePageModule.popularStores.map((store, key) => (
                    <div key={key}>
                      <ArrowPanel
                        key={key}
                        link={{ title: store.link.title, url: store.link.url }}
                        image={store.image}
                        icon={store.icon}
                      />
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
