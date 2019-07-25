import React, { useState } from "react";

import styles from "./dropdown-component.module.scss";
import { ClickableComponent } from "../clickable";
import ChevronDown from "@assets/icons/chevron-down.svg";

export interface IDropdownComponentProps {
  children: any;
  title: string;
}

const DropdownComponent = (props: IDropdownComponentProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const zIndexWhenOpen = 1021;
  const buttonHeight = 38;

  return (
    <div className={styles["dropdown"]}>
      <div className={`${styles["dropdown-child"]} ${!!isOpen && styles["dropdown-child--open"]}`}>
        <ClickableComponent
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          title={props.title}
          variant={isOpen ? "primary-inverted" : "secondary"}
          icon={ChevronDown}
          zIndex={isOpen ? zIndexWhenOpen : undefined}
          size={buttonHeight}
          fullWidth
        />
      </div>
      <div className={`${styles["content"]} ${!!isOpen && styles["content--open"]} `}>{props.children}</div>
    </div>
  );
};

export { DropdownComponent };
