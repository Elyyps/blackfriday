import * as React from "react";
import styles from "./navbar-search-component.module.scss";
import { IconComponent } from "@app/prep/modules-prep/core";
import { SEARCH_ICON } from "@app/constants/icons";

export interface INavbarSearchComponentProps {}

const NavbarSearchComponent = (props: INavbarSearchComponentProps) => (
  <div className={styles["navbar-search"]}>
    <div className={styles["navbar-search__bar"]}>
      <div className={styles["navbar-search__field"]}>
        <div className={styles["navbar-search__icon"]}>
          <IconComponent icon={SEARCH_ICON} size="12px" />
        </div>

        <input
          type="text"
          placeholder="Zoek deals en winkels"
          className={styles["navbar-search__input"]}
        />

        <div className={styles["navbar-search__results"]}>
          <div className="uk-container">results</div>
        </div>
      </div>
    </div>
  </div>
);
export { NavbarSearchComponent };
