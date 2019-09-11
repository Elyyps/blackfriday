import * as React from "react";
import { CtaNewsletterModule } from "@app/api/modules/cta-newsletter/cta-newsletter.module";
import styles from "./cta-newsletter-component.module.scss";
import { ShadowCardComponent } from "@app/core/shadow-card";
import { IconComponent } from "@app/core";
import { ClickableComponent } from "@app/core/clickable";
import { ModalComponent } from "@app/core/modal";
import { NewsletterFormComponent } from "@app/core/newsletter";
export interface ICtaNewsletterComponentProps {
  ctaNewsLetterModule: CtaNewsletterModule;
}

const onSubmit = () => {
  // Submit logic here
};

const CtaNewsletterComponent = (props: ICtaNewsletterComponentProps) => (
  <div className={styles["cta-small-newsletter"]}>
    <div className="uk-container">
      <ShadowCardComponent borderRadius={["2px"]}>
        <div className={styles["cta-small-newsletter__center"]}>
          <div className={styles["cta-small-newsletter__wrapper"]}>
            {props.ctaNewsLetterModule.icon && (
              <div className={styles["icon"]}>
                <IconComponent icon={props.ctaNewsLetterModule.icon} size="32px" />
              </div>
            )}
            <div className={styles["cta-small-newsletter__title"]}>{props.ctaNewsLetterModule.text}</div>
            {props.ctaNewsLetterModule.buttonTitle && (
              <ModalComponent
                title={props.ctaNewsLetterModule.modalTitle}
                trigger={<ClickableComponent title={props.ctaNewsLetterModule.buttonTitle} variant="primary-brand" />}
                variant={"small"}
              >
                <NewsletterFormComponent
                  checkBoxItems={props.ctaNewsLetterModule.newsletterItems}
                  onSubmit={onSubmit}
                />
              </ModalComponent>
            )}
          </div>
        </div>
      </ShadowCardComponent>
    </div>
  </div>
);

export { CtaNewsletterComponent };
