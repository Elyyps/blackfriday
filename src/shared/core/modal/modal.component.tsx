import * as React from "react";
import styles from "./modal-component.module.scss";

export interface IModalComponentProps {
  children: any;
  modalTarget: string;
  modalTitle?: string;
}

const ModalComponent = ({ children, modalTarget, modalTitle }: IModalComponentProps) => (
  <div id={modalTarget} className={`uk-modal uk-flex-top ${styles["uk-modal"]} ${styles["uk-flex-top"]}`} data-uk-modal>
    <div
      className={`uk-modal-dialog uk-modal-body uk-margin-auto-vertical ${styles["uk-modal-dialog"]} ${
        styles["uk-modal-body"]
      } ${styles["uk-margin-auto-vertical"]}`}
    >
      <div className={`uk-modal-head ${styles["uk-modal-head"]}`}>
        {modalTitle && <h2>{modalTitle}</h2>}
        <button role={"button"} className={`uk-modal-close ${styles["uk-modal-close"]}`} type="button" data-uk-close />
      </div>
      {children && <div className={`uk-modal-content ${styles["uk-modal-content"]}`}>{children}</div>}
    </div>
  </div>
);

export { ModalComponent };
