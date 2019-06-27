import style from "./dropdown-component.module.scss";
import * as React from "react";
import ChevronDown from "@assets/icons/chevron-down.svg";
import ChevronUp from "@assets/icons/chevron-up.svg";

import { Button } from "../button";

export interface IDropdownComponentProps {
  buttonVariant?: string;
  children?: any;
  orientation?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  title?: string;
}

const DropdownComponent = (props: IDropdownComponentProps) => {
  const [isDropdownOpened, setIsDropdownOpened] = React.useState(false);

  const toggleOpened = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  return (
    <React.Fragment>
      <div className={style["dropdown"]}>
        <div className={style["dropdown-button"]}>
          <Button
            title={props.title}
            variant={props.buttonVariant}
            icon={isDropdownOpened ? ChevronUp : ChevronDown}
            onClick={toggleOpened}
          />
        </div>
        <div
          data-uk-dropdown={props.orientation}
          className={style["dropdown-content"]}
        >
          {props.children}
        </div>
      </div>
    </React.Fragment>
  );
};
export { DropdownComponent };
