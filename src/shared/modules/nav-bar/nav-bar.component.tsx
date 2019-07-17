import * as React from "react";
import styles from "./nav-bar-component.module.scss";
import { ImageComponent } from "@app/prep/modules-prep/core";

import { SEARCH_ICON, MENU_ICON } from "@app/constants/icons";
import { ModalNavBar } from "@app/prep/modules-prep/core/modal-navbar";
import { HamburgerMenuComponent } from "@app/prep/modules-prep/hamburger-menu";
import { LinkComponent } from "@app/core/link";
import { INavBarModule } from "@app/api/modules/navbar/navbar.module";
import { NavbarSearchContainer } from "../navbar-search/container/navbar-search.container";
import { getInitialNavbarSearchDummyData } from "@app/api/modules/navbar-search/endpoints";

export interface INavBarComponentProps {
  navBarModule: INavBarModule;
}

const NavBarComponent = (props: INavBarComponentProps) => (
  <div className={styles["nav-bar"]}>
    <div className="uk-container">
      <div className={styles["nav-bar__holder"]}>
        <div>
          <div className={styles["nav-bar__logo"]}>
            <LinkComponent to="./">
              <ImageComponent src={props.navBarModule.logo} alt="image" isBlocking={true} />
            </LinkComponent>
          </div>
          <div className={`uk-visible@s ${styles["nav-bar__label"]}`}>{props.navBarModule.label}</div>
        </div>
        <div>
          <ul className={`uk-visible@m ${styles["nav-bar__navigation"]}`}>
            {props.navBarModule.links.map((link, key) => (
              <li key={key}>
                <LinkComponent to={link.url}>{link.title}</LinkComponent>
              </li>
            ))}
          </ul>

          <ModalNavBar
            className={`modal-search ${styles["nav-bar__search-button"]}`}
            close={"Sluiten"}
            icon={SEARCH_ICON}
            iconSize="14px"
          >
            <NavbarSearchContainer
              currentFilter=""
              dealsTitle={getInitialNavbarSearchDummyData().titleDeals}
              shopsTitle={getInitialNavbarSearchDummyData().titleShops}
            />
          </ModalNavBar>

          <ModalNavBar
            className={`modal-menu ${styles["nav-bar__toggle"]}`}
            title={"Menu"}
            close={"Sluiten"}
            icon={MENU_ICON}
            iconSize="17px"
          >
            <HamburgerMenuComponent />
          </ModalNavBar>
        </div>
      </div>
    </div>
  </div>
);

export { NavBarComponent };
