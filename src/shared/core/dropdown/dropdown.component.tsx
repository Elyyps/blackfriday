import style from "./dropdown-component.module.scss";
import * as React from "react";
import ChevronDown from "@assets/icons/chevron-down.svg";
import { IconComponent } from "../icon";

export interface IDropdownComponentProps {
  children?: any;
  icon?: string;
  title?: string;
}

const DropdownComponent = (props: IDropdownComponentProps) => (
  <div className={style["dropdown"]}>
    <div>
      <button>
        {props.icon ? <IconComponent icon={props.icon} size="18px" /> : ""}
        <span className={style["dropdown__title"]}>{props.title}</span>
        <IconComponent icon={ChevronDown} size="18px" />
      </button>
    </div>

    <div className={`${style["dropdown-content"]}`} uk-dropdown="mode: click">
      {props.children}
    </div>
  </div>
);
export { DropdownComponent };
