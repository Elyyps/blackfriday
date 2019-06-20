import * as React from "react";
import styles from "./hamburger-menu-component.module.scss";
import { Link } from "react-router-dom";

export interface IHamburgerMenuComponentProps {}

const HamburgerMenuComponent = (props: IHamburgerMenuComponentProps) => (
  <div className={styles["hamburger-menu"]}>
    <ul className={styles["hamburger-menu__navigation"]}>
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
  </div>
);

export { HamburgerMenuComponent };
