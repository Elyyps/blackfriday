import * as React from "react";

import { ModalDialogComponent } from "./modal-dialog.component";

export type ModalVariant = "small" | "big";
export type Role = "dialog" | "alertdialog";
export interface IModalComponentProps {
  ariaLabel?: string;
  modalBackground?: string;
  modalContent: JSX.Element;
  role?: Role;
  trigger: JSX.Element;
  variant: ModalVariant;
}

const ModalComponent = (props: IModalComponentProps) => {
  const [isModalOpen, setModal] = React.useState(false);
  const modalRef = React.createRef<HTMLDivElement>();
  const onKeyDown = ({ key }: KeyboardEvent) => {
    if (key === "Escape") setModal(false);
  };

  const onClickAway = (e: any) => {
    if (modalRef.current && modalRef.current && modalRef.current.contains(e.target)) return;
    setModal(false);
  };

  return (
    <React.Fragment>
      <div role={"botton"} onClick={() => setModal(true)}>
        {props.trigger}
      </div>

      {isModalOpen && (
        <ModalDialogComponent
          ariaLabel={props.ariaLabel ? props.ariaLabel : "dialog description"}
          background={props.modalBackground ? props.modalBackground : "#fff"}
          onClose={() => setModal(false)}
          variant={props.variant}
          role={props.role ? props.role : "dialog"}
          onKeyDown={onKeyDown}
          modalRef={modalRef}
          onClickAway={onClickAway}
        >
          {props.modalContent}
        </ModalDialogComponent>
      )}
    </React.Fragment>
  );
};
export { ModalComponent };
