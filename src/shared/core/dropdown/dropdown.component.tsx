import style from "./dropdown-component.module.scss";
import * as React from "react";
import { Dropdown } from "@app/api/core/dropdown";
import { Button } from "@app/prep/modules-prep/core";

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
          <span>Merk</span>
        </div>
        <div
          className={
            style[isDropdownOpened ? "dropdown-isOpen" : "dropdown-isClose"]
          }
        >
          {props.children}
        </div>
      </div>
      <div className="filter-brand">
        <Button title={"Merk"} type={"button"} variant={"dropdown"} />
        <div data-uk-dropdown="mode: click">Lorem</div>
      </div>
    </React.Fragment>
  );
};
export { DropdownComponent };
