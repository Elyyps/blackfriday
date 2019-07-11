import * as React from "react";
import styles from "./banner-module-component.module.scss";
import { BannerComponent, IBannerComponentProps } from "@app/core/banner";

export interface IBannerModuleComponentProps {
  bannerProps: IBannerComponentProps;
  bgcolor?: string;
  paddingBottom?: string;
  paddingTop?: string;
}

const BannerModuleComponent = (props: IBannerModuleComponentProps) => {
  const inlineStyles = {
    backgroundColor: props.bgcolor,
    paddingTop: props.paddingTop,
    paddingBottom: props.paddingBottom
  };

  return (
    <div className={styles["banner-module"]}>
      <div className={styles["holder"]} style={inlineStyles}>
        <div className={`uk-container ${styles["container"]}`}>
          <BannerComponent
            buttonLink={props.bannerProps.buttonLink}
            buttonTitle={props.bannerProps.buttonTitle}
            image={props.bannerProps.image}
            label={props.bannerProps.label}
            logo={props.bannerProps.logo}
            text={props.bannerProps.text}
            title={props.bannerProps.title}
          />
        </div>
      </div>
    </div>
  );
};

export { BannerModuleComponent };
