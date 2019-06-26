import style from "./dropdown-component.module.scss";
import * as React from "react";
import { Dropdown } from "@app/api/core/dropdown";
import ChevronDown from "@assets/icons/chevron-down.svg";
import { Button } from "../button";

export interface IDropdownComponentProps {
  children: any;
  dropdown?: Dropdown;
}

const DropdownComponent = (props: IDropdownComponentProps) => {
  const [isDropdownOpened, setIsDropdownOpened] = React.useState(false);

  const toggleOpened = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  return (
    <React.Fragment>
      <div className={style["dropdown"]}>
        <div
          className={style["dropdown-button"]}
          onClick={toggleOpened}
          role="button"
        >
          <Button
            title={"Merk"}
            type={"button"}
            variant={"dropdown"}
            icon={ChevronDown}
          />
        </div>
        <div
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
