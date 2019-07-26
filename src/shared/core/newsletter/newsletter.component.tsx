import * as React from "react";
import styles from "./newsletter-component.module.scss";
import { IconComponent } from "../icon";
import { Button } from "../button";

import Paper from "@assets/icons/paper.svg";
import Icon from "@assets/icons/send.svg";
import { NewsletterModalComponent } from "./newsletter.modal.component";

export interface INewsletterComponentProps {}

const NewsletterComponent = (props: INewsletterComponentProps) => (
  <div>
    <div className={styles["newsletter"]}>
      <div className={styles["newsletter__head"]}>
        <IconComponent icon={Icon} size={"30px"} />
      </div>
      <div className={styles["newsletter__body"]}>
        <div className={styles["newsletter__content"]}>Op de hoogte blijven? Meld je dan aan!</div>
        <div data-uk-toggle={`target: #modal-newsletter`} className={styles["newsletter__action"]}>
          <Button iconStyle="filled" fullWidth variant="secondary-inverted" title="Nieuwsbrief" icon={Paper} />
        </div>
      </div>
    </div>
    <NewsletterModalComponent />
  </div>
);

export { NewsletterComponent };
