import * as React from "react";
import styles from "./nav-bar-component.module.scss";
import { ImageComponent, ModalNavBar } from "@app/core";

import { SEARCH_ICON, MENU_ICON } from "@app/constants/icons";

import { LinkComponent } from "@app/core/link";
import { INavBarModule } from "@app/api/modules/navbar/navbar.module";
import { NavbarSearchContainer } from "./navbar-search/container/navbar-search.container";
import { getInitialNavbarSearchDummyData } from "@app/api/modules/navbar/navbar-search/endpoints";
import { NavbarMenuItemComponent } from "../navbar-menu-item";
import { NavBarContainerProps } from "./cointeners/nav-bar-containers";
import { IBlackFridayDate } from "@app/stores/settings";
import { CountDownContainer } from "@app/core/count-down/containers/count-down-containers";
import { LanguageSwitchContainer } from "@app/core/language-switch/language-switch.container";
export interface INavBarComponentProps {
  navBarModule: INavBarModule;
}

const NavBarComponent = (props: INavBarComponentProps & NavBarContainerProps) => (
  <div className={styles["nav-bar"]}>
    <div className="uk-container">
      <div className={styles["nav-bar__holder"]}>
        <div>
          <div className={styles["nav-bar__logo"]}>
            <LinkComponent to="./">
              <ImageComponent src={props.navBarModule.logo} alt="blackfriday logo" isBlocking={true} />
            </LinkComponent>
          </div>
          <div className={`uk-visible@s ${styles["nav-bar__label"]}`}>
            {`Black Friday ${(props.blackFridayDate as IBlackFridayDate).year}:`} <CountDownContainer />
          </div>
        </div>
        <div>
          <ul className={`uk-visible@m ${styles["nav-bar__navigation"]}`}>
            {props.navBarModule.links.map((link, key) => (
              <li key={key}>
                <LinkComponent to={link.url}>{link.title}</LinkComponent>
              </li>
            ))}
            <li>
              <LanguageSwitchContainer />
            </li>
          </ul>
          <ModalNavBar
            className={`${styles["nav-bar__search-button"]}`}
            variant={"search"}
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
            className={`${styles["nav-bar__toggle"]}`}
            variant={"menu"}
            title={"Menu"}
            close={"Sluiten"}
            icon={MENU_ICON}
            iconSize="17px"
          >
            <NavbarMenuItemComponent items={props.navBarModule.navbarMenuItem} />
          </ModalNavBar>
        </div>
      </div>
    </div>
  </div>
);

export { NavBarComponent };
