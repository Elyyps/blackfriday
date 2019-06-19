import * as React from "react";
import styles from "./navbar-search-component.module.scss";
import { IconComponent } from "@app/prep/modules-prep/core";
import { SEARCH_ICON, CLOSE_ICON } from "@app/constants/icons";

export interface INavbarSearchComponentProps {
  onClose: () => void;
  opened: boolean;
}

const NavbarSearchComponent = (props: INavbarSearchComponentProps) => {
  const { opened } = props;
  const styleOpened = opened ? "opened" : "closed";

  React.useEffect(() => {
    if (props.opened) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [props.opened]);

  return (
    <div className={`${styles["navbar-search"]} ${styles[styleOpened]}`}>
      <div className={styles["navbar-search__bar"]}>
        <div className="uk-container">
          <div className={styles["navbar-search__bar-holder"]}>
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
            <div
              onClick={props.onClose}
              role="button"
              aria-label="closeButton"
              className={styles["navbar-search__close"]}
            >
              <IconComponent icon={CLOSE_ICON} size="12px" />
              <span className="uk-visible@m">Sluiten</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NavbarSearchComponent };
