import * as React from "react";
import styles from "./newsletter-component.module.scss";
import { IconComponent } from "../icon";
import { Button } from "../button";
import { Input, TextArea } from "@app/prep/modules-prep/core";
import Paper from "@assets/icons/paper.svg";
import Icon from "@assets/icons/send.svg";
import { ModalData } from "@app/prep/pages-prep/winkel-single/dummy-data";
import { ModalComponent } from "../modal";

export interface INewsletterComponentProps {}

const NewsletterComponent = (props: INewsletterComponentProps) => (
  <div>
    <div className={styles["newsletter"]}>
      <div className={styles["newsletter__head"]}>
        <IconComponent icon={Icon} size={"30px"} />
      </div>
      <div className={styles["newsletter__body"]}>
        <div className={styles["newsletter__content"]}>Op de hoogte blijven? Meld je dan aan!</div>
        <div data-uk-toggle={`target: #modal-product-detail`} className={styles["newsletter__action"]}>
          <Button iconStyle="filled" fullWidth variant="secondary-inverted" title="Niewusbrief" icon={Paper} />
        </div>
      </div>
    </div>
    <ModalComponent modalTarget="modal-product-detail" modalTitle="Inschrijven nieuwsbrief">
      <form action="/" className={"form"}>
        <div className="uk-grid" data-uk-margin>
          <div className="uk-width-1-2@s">
            <Input name={"text"} label={"Naam"} />
          </div>
          <div className="uk-width-1-2@s">
            <Input name={"text"} label={"E-mailadres"} />
          </div>
        </div>
        <div className="uk-margin-small-top">
          <TextArea name={"text"} label={"Bericht"} />
        </div>
        <div className="form-bottom uk-margin-small-top">
          <Button title={"Verzenden"} icon={ModalData.button_icon} />
        </div>
      </form>
    </ModalComponent>
  </div>
);

export { NewsletterComponent };
