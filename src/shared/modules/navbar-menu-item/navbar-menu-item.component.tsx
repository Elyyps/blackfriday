import * as React from "react";
import styles from "./navbar-menu-item-component.module.scss";

import { Link } from "react-router-dom";
import { ExpandablePanelComponent } from "@app/core/expandable-panel";

import { MenuItemExpandable } from "@app/api/core/menu-item/menu-item-expanded";
import { MenuItemLink } from "@app/api/core/menu-item/menu-item-link";
import { MenuItem } from "@app/api/core/menu-item/menu-item";
import ArrowUp from "@assets/icons/chevron-up.svg";
import ArrowDown from "@assets/icons/chevron-down.svg";
import { IconComponent } from "@app/core";
export interface INavbarMenuItemComponentProps {
  items: MenuItem[];
}
const CLOSE_PANEL = "close";

const NavbarMenuItemComponent = (props: INavbarMenuItemComponentProps) => {
  const [openedPanel, setOpenedPanel] = React.useState<string | undefined>(undefined);
  const panelClicked = (key?: string) => {
    if (openedPanel === key) {
      setOpenedPanel(CLOSE_PANEL);
    } else {
      setOpenedPanel(key);
    }
  };

  return (
    <div className={styles["navbar-menu-item"]}>
      <div className={styles["navbar-menu-item__navigation"]}>
        {props.items.map((item, index) =>
          (item as MenuItemExpandable).links ? (
            <ExpandablePanelComponent
              callback={panelClicked}
              identifier={`${index}`}
              opened={openedPanel === `${index}`}
              key={index}
              mainContent={
                <div
                  className={`${styles["navbar-menu-item__expandable-title"]} ${
                    openedPanel === `${index}` ? styles["navbar-menu-item__clicked"] : ""
                  }`}
                >
                  <a>{(item as MenuItemExpandable).text}</a>
                  <div className={styles["navbar-menu-item__expandable__icon"]}>
                    <IconComponent icon={openedPanel === `${index}` ? ArrowUp : ArrowDown} size="10px" />
                  </div>
                </div>
              }
            >
              <ul>
                {(item as MenuItemExpandable).links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.url}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </ExpandablePanelComponent>
          ) : (
            <div className={styles["navbar-menu-item__expandable-title"]} key={index}>
              <Link to={(item as MenuItemLink).url}>{(item as MenuItemLink).text}</Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export { NavbarMenuItemComponent };
