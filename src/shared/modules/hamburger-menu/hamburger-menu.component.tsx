import * as React from "react";
import styles from "./hamburger-menu-component.module.scss";

import { Link } from "react-router-dom";
import { ExpandablePanelComponent } from "@app/core/expandable-panel";

import { MenuItemExpandable } from "@app/api/core/menu-item/menu-item-expanded";
import { MenuItemLink } from "@app/api/core/menu-item/menu-item-link";
import { MenuItem } from "@app/api/core/menu-item/menu-item";

export interface IHamburgerMenuComponentProps {
  items: MenuItem[];
}
const CLOSE_PANEL = "close";

const HamburgerMenuComponent = (props: IHamburgerMenuComponentProps) => {
  const [openedPanel, setOpenedPanel] = React.useState<string | undefined>(undefined);
  const panelClicked = (key?: string) => {
    if (openedPanel === key) {
      setOpenedPanel(CLOSE_PANEL);
    } else {
      setOpenedPanel(key);
    }
  };

  return (
    <div className={styles["hamburger-menu"]}>
      <ul className={styles["hamburger-menu__navigation"]}>
        {props.items.map((item, index) =>
          (item as MenuItemExpandable).links ? (
            <ExpandablePanelComponent
              callback={panelClicked}
              identifier={`${index}`}
              opened={openedPanel === `${index}`}
              key={index}
              mainContent={
                <div className={styles["hamburger-menu__expandable-title"]}>{(item as MenuItemExpandable).text}</div>
              }
            >
              <li>
                <ul>
                  {(item as MenuItemExpandable).links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.url}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ExpandablePanelComponent>
          ) : (
            <li className={styles["hamburger-menu__expandable-title"]} key={index}>
              <Link to={(item as MenuItemLink).url}>{(item as MenuItemLink).text}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export { HamburgerMenuComponent };
