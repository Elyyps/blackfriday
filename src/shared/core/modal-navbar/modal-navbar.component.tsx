import * as React from "react";

import { IconComponent } from "@app/prep/modules-prep/core";
import { CLOSE_ICON } from "@app/constants/icons";
import styles from "./modal-navbar-component.module.scss";
import ReactDOM from "react-dom";

interface IModalNavBarProps {
  children?: any;
  className?: string;
  close?: string;
  icon?: any;
  iconSize?: any;
  title?: string;
  variant: "search" | "menu";
}

const ModalNavBar = (props: IModalNavBarProps) => {
  const [isOpen, setIsMenuOpened] = React.useState(false);
  const toggleOpened = () => {
    setIsMenuOpened(false);
  };
  const onKeyDown = ({ key }: KeyboardEvent) => {
    if (key === "Escape") setIsMenuOpened(false);
  };
  const modalRef = React.createRef<HTMLDivElement>();
  const onClickAway = (e: any) => {
    if (modalRef.current && modalRef.current && modalRef.current.contains(e.target)) return;
    setIsMenuOpened(false);
  };

  React.useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      if (!!window) {
        window.removeEventListener("keydown", onKeyDown);
      }
    };
  }, []);

  const styleOpened = isOpen ? "opened" : "closed";

  React.useEffect(() => {
    if (isOpen) {
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "hidden";
      }
    }

    return () => {
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  return (
    <div className={props.className}>
      <button
        type="button"
        className={styles["modal-navbar__open"]}
        onClick={() => {
          setIsMenuOpened(true);
        }}
      >
        <IconComponent icon={props.icon} size={props.iconSize} />
        {props.title}
      </button>
      {typeof document !== "undefined" &&
        ReactDOM.createPortal(
          <div
            role={"role"}
            className={`${styles["modal-navbar"]} ${styles[styleOpened]}`}
            onClick={(e): any => {
              onClickAway(e);
            }}
          >
            <div
              className={`${styles["modal-navbar__holder"]} ${
                styles[`modal-navbar__holder__${props.variant}__close`]
              } ${isOpen ? styles[`modal-navbar__holder__${props.variant}__open`] : ""} `}
              ref={modalRef}
            >
              <div
                className={`${styles["modal-navbar__container"]} ${
                  styles[`modal-navbar__container__${props.variant}`]
                }`}
              >
                <div
                  role="button"
                  aria-label="closeButton"
                  className={`${styles["modal-navbar__close"]} ${styles[`modal-navbar__close__${props.variant}`]}`}
                  onClick={toggleOpened}
                >
                  <IconComponent color="white" icon={CLOSE_ICON} size="12px" />
                  <span className="uk-visible@m">{props.close}</span>
                </div>
                <div className="modal-navbar__items">{props.children}</div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export { ModalNavBar };
