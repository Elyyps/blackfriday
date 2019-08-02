import React, { useState, useRef } from "react";

import styles from "./dropdown-component.module.scss";
import { ClickableComponent } from "../clickable";
import useOutsideClick from "@app/util/outside-click";

export interface IDropdownComponentProps {
  animated?: boolean;
  children: any;
  icon?: string;
  iconPosition?: "right" | "left";
  title: string;
}

const DropdownComponent = (props: IDropdownComponentProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const zIndexWhenOpen = 1021;
  const buttonHeight = 38;

  useOutsideClick(wrapperRef, () => {
    setIsOpen(false);
  });

  return (
    <div className={styles["dropdown"]} ref={wrapperRef}>
      <div className={`${styles["dropdown-child"]} ${!!isOpen && styles["dropdown-child--open"]}`}>
        <ClickableComponent
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          title={props.title}
          variant={isOpen ? "primary-inverted" : "secondary"}
          icon={props.icon ? props.icon : "ChevronDown"}
          zIndex={isOpen ? zIndexWhenOpen : undefined}
          size={buttonHeight}
          fullWidth
          iconPosition={props.iconPosition ? props.iconPosition : "left"}
          animated={props.animated}
        />
      </div>
      <div className={`${styles["content"]} ${!!isOpen && styles["content--open"]} `}>{props.children}</div>
    </div>
  );
};

export { DropdownComponent };
