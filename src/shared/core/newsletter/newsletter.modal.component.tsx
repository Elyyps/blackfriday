import * as React from "react";

import { ModalComponent } from "../modal";
import { NewsletterFormComponent } from "./newsletter.forms.component";

export interface INewsletterModalComponentProps {}

const onSubmit = () => {
  // Submit logic here
};

const NewsletterModalComponent = (props: INewsletterModalComponentProps) => (
  <ModalComponent modalTarget="modal-newsletter" modalTitle="Inschrijven nieuwsbrief">
    <NewsletterFormComponent onSubmit={onSubmit} />
  </ModalComponent>
);

export { NewsletterModalComponent };
