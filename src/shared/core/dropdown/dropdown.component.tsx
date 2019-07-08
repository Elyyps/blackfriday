import style from "./dropdown-component.module.scss";
import * as React from "react";
import ChevronDown from "@assets/icons/chevron-down.svg";
import ChevronUp from "@assets/icons/chevron-up.svg";
import { Button } from "@app/core/button";

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
  icon?: string;
  orientation?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  title?: string;
}

const DropdownComponent = (props: IDropdownComponentProps) => {
  const [isDropdownOpened, setIsDropdownOpened] = React.useState(false);

  const toggleOpened = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  return (
    <div className={style["dropdown"]}>
      <div className={style["dropdown-button"]}>
        <Button
          title={props.title}
          variant={props.buttonVariant}
          icon={props.icon ? props.icon : isDropdownOpened ? ChevronUp : ChevronDown}
          onClick={toggleOpened}
        />
      </div>

      <div className={`${style["dropdown-content"]}`} uk-dropdown="mode: click" data-uk-dropdown={props.orientation}>
        {props.children}
      </div>
    </div>
  );
};
export { DropdownComponent };
