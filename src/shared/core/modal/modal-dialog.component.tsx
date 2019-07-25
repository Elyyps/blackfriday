import * as React from "react";
import styles from "./modal-dialog-component.module.scss";
import ReactDOM from "react-dom";
import { Role, ModalVariant } from ".";
import FocusLock from "react-focus-lock";
export interface IModalDialogComponentProps {
  ariaLabel: string;
  background: string;
  children: JSX.Element;
  modalRef: React.RefObject<HTMLDivElement>;
  onClickAway: (e: any) => void;
  onClose: () => void;
  onKeyDown: ({ key }: KeyboardEvent) => void;
  role: Role;
  title?: string;
  variant: ModalVariant;
}

const ModalDialogComponent = (props: IModalDialogComponentProps) => {
  React.useEffect(() => {
    window.addEventListener("keydown", props.onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      if (!!window) {
        window.removeEventListener("keydown", props.onKeyDown);
      }
    };
  }, []);
  const modalSize = props.variant === "small" ? "600px" : props.variant === "big" ? "50%" : "600px";
  if (typeof document !== "undefined") {
    return ReactDOM.createPortal(
      <FocusLock>
        <aside
          className={styles["c-modal-cover"]}
          role={props.role}
          aria-label={props.ariaLabel}
          aria-modal="true"
          tabIndex={-1}
          onMouseDown={(e): any => {
            props.onClickAway(e);
          }}
        >
          <div
            className={styles["c-modal"]}
            style={{ background: props.background, width: modalSize }}
            ref={props.modalRef}
          >
            <button className={styles["c-modal__close"]} aria-labelledby="close-modal" onClick={props.onClose}>
              <svg id="close-modal" className={styles["c-modal__close-icon"]} viewBox="0 0 40 40">
                <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
              </svg>
            </button>
            <div className={styles["c-modal__body"]}>
              {props.title && <h2>{props.title}</h2>}
              {props.children ? props.children : ""}
            </div>
          </div>
        </aside>
      </FocusLock>,
      document.body
    );
  }

  return null;
};

export { ModalDialogComponent };
