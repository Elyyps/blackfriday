import style from "./dropdown-component.module.scss";
import * as React from "react";
import ChevronDown from "@assets/icons/chevron-down.svg";
import ChevronUp from "@assets/icons/chevron-up.svg";
import { useState } from "react";
import { Button } from "../button";
import { ShadowCardComponent } from "../shadow-card";

export interface IDropdownComponentProps {
  buttonVariant?:
    | "primary-default"
    | "primary-brand"
    | "primary-inverted"
    | "secondary"
    | "secondary-inverted"
    | "tertiary"
    | "tertiary-inverted";
  children?: any;
  orientation?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  title?: string;
}

const DropdownComponent = (props: IDropdownComponentProps) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  const toggleOpened = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  return (
    <div className={style["dropdown"]}>
      <ShadowCardComponent shadowSize="small">
        <div className={style["dropdown-button"]}>
          <Button
            title={props.title}
            variant={props.buttonVariant}
            icon={isDropdownOpened ? ChevronUp : ChevronDown}
            onClick={toggleOpened}
          />
        </div>
        <div className={`${style["dropdown-content"]}`} data-uk-dropdown={"pos:" + props.orientation}>
          {props.children}
        </div>
      </ShadowCardComponent>
    </div>
  );
};
export { DropdownComponent };
