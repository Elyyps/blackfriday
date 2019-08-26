import * as React from "react";
import { CtaSmallModule } from "@app/api/modules/cta-small/cta-small.module";
import { CtaSmallComponent } from "@app/core/cta-small/cta-small.component";

export interface ICtaSmallComponentProps {
  ctaSmallModule: CtaSmallModule;
}

const CtaSmallModuleComponent = (props: ICtaSmallComponentProps) => <CtaSmallComponent {...props.ctaSmallModule} />;

export { CtaSmallModuleComponent };
