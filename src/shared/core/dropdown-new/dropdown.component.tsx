import React, { useState, useRef } from "react";

import styles from "./dropdown-component.module.scss";
import { ClickableComponent } from "../clickable";
import ChevronDown from "@assets/icons/chevron-down.svg";
import useOutsideClick from "@app/util/outside-click";

export interface IDropdownComponentProps {
  children: any;
  hasSelectedItems?: boolean;
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

  const getVariant = () => {
    if (isOpen) {
      return "primary-inverted";
    }
    if (props.hasSelectedItems) {
      return "primary-brand";
    }

    return "secondary";
  };

  return (
    <div className={styles["dropdown"]} ref={wrapperRef}>
      <div
        className={`${styles["dropdown-child"]} ${!!isOpen &&
          styles["dropdown-child--open"]} ${!!props.hasSelectedItems &&
          !isOpen &&
          styles["dropdown-child--has-selected"]}`}
      >
        <ClickableComponent
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          title={props.title}
          variant={getVariant()}
          icon={ChevronDown}
          zIndex={isOpen ? zIndexWhenOpen : undefined}
          size={buttonHeight}
          fullWidth
          iconFillColor="#ffffff"
        />
      </div>
      <div className={`${styles["content"]} ${!!isOpen && styles["content--open"]} `}>{props.children}</div>
    </div>
  );
};

export { DropdownComponent };
