import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./nav-bar-component.module.scss";
import { ImageComponent } from "@app/prep/modules-prep/core";

import { SEARCH_ICON, MENU_ICON } from "@app/constants/icons";
import { ModalNavBar } from "@app/prep/modules-prep/core/modal-navbar";
import LOGO from "@assets/bf-expert-brand.svg";
import { NavbarSearchComponent } from "@app/prep/modules-prep/navbar-search";
import { HamburgerMenuComponent } from "@app/prep/modules-prep/hamburger-menu";

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

          <ModalNavBar
            className={`modal-search ${styles["nav-bar__search-button"]}`}
            close={"Sluiten"}
            icon={SEARCH_ICON}
            iconSize="14px"
          >
            <NavbarSearchComponent />
          </ModalNavBar>

          <ModalNavBar
            className={`modal-menu ${styles["nav-bar__toggle"]}`}
            title={"Menu"}
            close={"Sluiten"}
            icon={MENU_ICON}
            iconSize="17px"
          >
            <HamburgerMenuComponent/>
          </ModalNavBar>
        </div>
      </div>
    </div>
  </div>
);

export { NavBarComponent };
