import * as React from "react";
import { BannerComponent, IBannerComponentProps } from "@app/core/banner";
import { bannerProps } from "@app/api/core/banner";

export interface IBannerModuleComponentProps {
  bannerProps: IBannerComponentProps;
}

const BannerModuleComponent = (props: IBannerModuleComponentProps) => (
  <React.Fragment>
    <BannerComponent {...bannerProps} />
  </React.Fragment>
);

export { BannerModuleComponent };
