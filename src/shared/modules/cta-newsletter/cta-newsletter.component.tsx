import * as React from "react";
import { CtaSmallComponent } from "@app/core/cta-small/cta-small.component";
import { CtaNewsletterModule } from "@app/api/modules/cta-newsletter/cta-newsletter.module";

export interface ICtaNewsletterComponentProps {
  ctaNewsLetterModule: CtaNewsletterModule;
}

const onClick = () => {
  // TODO: Implement show newsletter modal when Daniele finishes implementing it.
};

const CtaNewsletterComponent = (props: ICtaNewsletterComponentProps) => (
  <CtaSmallComponent onClick={onClick} {...props.ctaNewsLetterModule} />
);

export { CtaNewsletterComponent };
