import React, { useRef } from "react";

import styles from "./dropdown-component.module.scss";
import { ClickableComponent } from "../clickable";
import useOutsideClick from "@app/util/outside-click";
import ChevronDown from "@assets/icons/chevron-down.svg";

export interface IDropdownComponentProps {
  animated?: boolean;
  children: any;
  hasSelectedItems?: boolean;
  icon?: string;
  iconPosition?: "right" | "left";
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
}

const DropdownComponent = (props: IDropdownComponentProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const zIndexWhenOpen = 1021;

  useOutsideClick(wrapperRef, () => {
    if (props.isOpen) {
      props.setIsOpen(false);
    }
  });

  const getVariant = () => {
    if (props.isOpen) {
      return "primary-inverted";
    }
    if (props.hasSelectedItems) {
      return "primary-brand";
    }

    return "secondary";
  };

  const onButtonClick = () => {
    if (props.isOpen) {
      props.setIsOpen(false);
    } else {
      props.setIsOpen(true);
    }
  };

  return (
    <div className={`${styles["dropdown"]} ${!!props.isOpen && styles["dropdown--open"]}`} ref={wrapperRef}>
      <div
        className={`${styles["dropdown-child"]} 
        ${!!props.hasSelectedItems && !props.isOpen && styles["dropdown-child--has-selected"]}
          ${!!props.isOpen && styles["dropdown-child--open"]}`}
      >
        <ClickableComponent
          onClick={onButtonClick}
          title={props.title}
          variant={getVariant()}
          zIndex={props.isOpen ? zIndexWhenOpen : undefined}
          iconFillColor="#ffffff"
          icon={props.icon ? props.icon : ChevronDown}
          iconPosition="right"
        />
      </div>
      <div className={`${styles["content"]} ${!!props.isOpen && styles["content--open"]} `}>{props.children}</div>
    </div>
  );
};

export { DropdownComponent };
