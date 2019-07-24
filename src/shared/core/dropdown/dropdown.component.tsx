import style from "./dropdown-component.module.scss";
import * as React from "react";
import ChevronDown from "@assets/icons/chevron-down.svg";
import { Button } from "../button";
import { ShadowCardComponent } from "../shadow-card";

export interface IDropdownComponentProps {
  buttonColor?: "outline" | "filled" | "outline-fill";
  buttonVariant?:
    | "primary-default"
    | "primary-brand"
    | "primary-inverted"
    | "secondary"
    | "secondary-inverted"
    | "tertiary"
    | "tertiary-inverted";
  children?: any;
  icon?: any;
  orientation?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  title?: string;
}

const DropdownComponent = (props: IDropdownComponentProps) => (
  <div className={style["dropdown"]}>
    <ShadowCardComponent shadowSize="small">
      <div className={style["dropdown-button"]}>
        <Button
          title={props.title}
          variant={props.buttonVariant}
          icon={props.icon || ChevronDown}
          iconStyle={props.buttonColor}
        />
      </div>
      <div className={`${style["dropdown-content"]}`} data-uk-dropdown="mode:click">
        {props.children}
      </div>
    </ShadowCardComponent>
  </div>
);
export { DropdownComponent };
