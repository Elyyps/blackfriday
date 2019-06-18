import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./nav-bar-component.module.scss";
import { IconComponent, ImageComponent } from "@app/prep/modules-prep/core";
import { SEARCH_ICON, MENU_ICON } from "@app/constants/icons";
import LOGO from "@assets/bf-expert-brand.svg";

export interface INavBarComponentProps {}

const NavBarComponent = (props: INavBarComponentProps) => (
  <div className={styles["nav-bar"]}>
    <div className="uk-container">
      <div className={styles["nav-bar__holder"]}>
        <div>
          <div className={styles["nav-bar__logo"]}>
            <Link to="./">
              <ImageComponent src={LOGO} alt="image" isBlocking={true} />
            </Link>
          </div>
          <div className={`uk-visible@s ${styles["nav-bar__label"]}`}>
            Black Friday 2019: NOG 10 dagen!
          </div>
        </div>
        <div>
          <ul className={`uk-visible@m ${styles["nav-bar__navigation"]}`}>
            <li>
              <Link to="./">Winkels</Link>
            </li>
            <li>
              <Link to="./">Productdeals</Link>
            </li>
            <li>
              <Link to="./">Black Friday</Link>
            </li>
          </ul>
          <div
            className={styles["nav-bar__search-button"]}
            role="button"
            aria-label="searchButton"
          >
            <IconComponent icon={SEARCH_ICON} size="14px" />
          </div>
          <div
            className={styles["nav-bar__toggle"]}
            role="button"
            aria-label="menuButton"
          >
            <IconComponent icon={MENU_ICON} size="17px" />
            Menu
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { NavBarComponent };
