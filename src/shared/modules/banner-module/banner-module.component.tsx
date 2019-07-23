import * as React from "react";
import { BannerComponent } from "@app/core/banner";
import { BannerModule } from "@app/api/modules/banner/banner.module";

export interface IBannerModuleComponentProps {
  bannerModule: BannerModule;
}

const BannerModuleComponent = (props: IBannerModuleComponentProps) => (
  <React.Fragment>
    <BannerComponent bannerModule={props.bannerModule} />
  </React.Fragment>
);

export { BannerModuleComponent };
