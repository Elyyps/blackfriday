import * as React from "react";
import styles from "./newsletter-component.module.scss";
import { IconComponent } from "../icon";
import { Button } from "../button";
import { ModalComponent } from "../modal";
import Paper from "@assets/icons/paper.svg";
import Icon from "@assets/icons/send.svg";
import { NewsletterFormComponent } from "./newsletter.forms.component";
import { NewsletterModule } from "@app/api/modules/newsletter/newsletter";
export interface INewsletterComponentProps {
  newsletterModule: NewsletterModule;
}

const onSubmit = (event: any) => {
  // Submit logic here
};
const NewsletterComponent = (props: INewsletterComponentProps) => {
  const triggerButton = (
    <Button iconStyle="filled" fullWidth variant="secondary-inverted" title="Nieuwsbrief" icon={Paper} />
  );

  return (
    <div>
      <div className={styles["newsletter"]}>
        <div className={styles["newsletter__head"]}>
          <IconComponent icon={Icon} size={"30px"} />
        </div>
        <div className={styles["newsletter__body"]}>
          <div className={styles["newsletter__content"]}>{props.newsletterModule.text}</div>
          <div className={styles["newsletter__action"]}>
            <ModalComponent title={props.newsletterModule.modalTitle} trigger={triggerButton} variant={"big"}>
              <NewsletterFormComponent checkBoxItems={props.newsletterModule.items} onSubmit={onSubmit} />
            </ModalComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewsletterComponent };
