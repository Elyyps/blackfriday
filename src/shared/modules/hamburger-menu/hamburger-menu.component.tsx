import * as React from "react";
import styles from "./hamburger-menu-component.module.scss";
import { Link as Item } from "@app/api/core/link";
import { Link } from "react-router-dom";
import { ExpandablePanelComponent } from "@app/core/expandable-panel";
import { GroupLinks } from "@app/api/core/group-links";

export interface IHamburgerMenuComponentProps {
  items: Item[] | GroupLinks[];
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
        {props.items.map((item, index) => (
          <ExpandablePanelComponent
            callback={panelClicked}
            identifier={"1"}
            opened={openedPanel === "1"}
            key={1}
            mainContent={<div className={styles["hamburger-menu__expandable-title"]}>{item}</div>}
          >
            <div>
              <ul>
                {props.items.map((item, index) => (
                  <li key={index}>
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </ExpandablePanelComponent>
        ))}
      </ul>
    </div>
  );
};

export { HamburgerMenuComponent };
