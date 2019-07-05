import * as React from "react";
import "./modal.component.scss";
// tslint:disable-next-line
if (typeof window !== "undefined") {
  require("uikit");
}

interface IModalProps {
  children: any;
  modal_target: string;
  modal_title?: string;
}

const Modal = ({ children, modal_target, modal_title }: IModalProps) => (
  <>
    <div id={modal_target} className="uk-modal uk-flex-top" data-uk-modal>
      <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <div className="uk-modal-head">
          {modal_title ? <h2>{modal_title}</h2> : ""}
          <button
            role={"button"}
            className="uk-modal-close"
            type="button"
            data-uk-close
          >
            {/*<IconComponent icon={CLOSE_ICON} size={"15px"}/>*/}
          </button>
        </div>
        {children ? <div className="uk-modal-content">{children}</div> : ""}
      </div>
    </div>
  </>
);

export { Modal };
