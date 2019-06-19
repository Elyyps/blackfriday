import * as React from "react";
import styles from "./hamburger-menu-component.module.scss";
import { Link } from "react-router-dom";
import { IconComponent } from "@app/prep/modules-prep/core";
import { CLOSE_ICON } from "@app/constants/icons";

export interface IHamburgerMenuComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const HamburgerMenuComponent = (props: IHamburgerMenuComponentProps) => {
  const { isOpen } = props;

  const styleOpened = isOpen ? "opened" : "closed";

  React.useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [props.isOpen]);

  return (
    <div className={`${styles["hamburger-menu"]} ${styles[styleOpened]}`}>
      <div className={styles["hamburger-menu__holder"]}>
        <div
          onClick={props.onClose}
          role="button"
          aria-label="closeButton"
          className={styles["hamburger-menu__close"]}
        >
          <IconComponent icon={CLOSE_ICON} size="12px" />
          Sluiten
        </div>
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
    </div>
  );
};

export { HamburgerMenuComponent };
