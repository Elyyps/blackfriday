import style from "./dropdown-component.module.scss";
import * as React from "react";
import ChevronDown from "@assets/icons/chevron-down.svg";
import ChevronUp from "@assets/icons/chevron-up.svg";

import { Button } from "../button";

export interface IDropdownComponentProps {
  children: any;
  orientation?: "left" | "right";
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
            title={"Merk"}
            variant={"primary-inverted"}
            icon={isDropdownOpened ? ChevronUp : ChevronDown}
            onClick={toggleOpened}
          />
        </div>
        <div
          style={{ float: props.orientation }}
          className={
            style[isDropdownOpened ? "dropdown-isOpen" : "dropdown-isClose"]
          }
        >
          {props.children}
        </div>
      </div>
    </React.Fragment>
  );
};
export { DropdownComponent };
