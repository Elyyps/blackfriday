import React from "react";

import { getComponent } from "@app/util/get-modules-from-page";

import styles from "./module-component.module.scss";
import { WordPressPostModule } from "@app/api/modules/wordpress-module/wordpress-module";
import { Background } from "@app/api/core/background";
import { IScreenSize, ViewType } from "@app/stores/settings";

export interface IModuleComponentProps {
  screenSize: IScreenSize | undefined;
  wordPressModule: WordPressPostModule;
}

const Z_INDEX_MAX = 100;

const ModuleComponent = (props: IModuleComponentProps) => {
  const component = getComponent(props.wordPressModule);

  const isMobile =
    props.screenSize &&
    (props.screenSize.viewType === ViewType.Mobile ||
      props.screenSize.viewType === ViewType.MobileBig ||
      props.screenSize.viewType === ViewType.Tablet)
      ? true
      : false;

  const styleContainerModule = {
    ...getBackgroundStyleProperties(props.wordPressModule.background as Background),
    paddingTop: props.wordPressModule.topPadding
      ? isMobile
        ? props.wordPressModule.topPadding.mobileSpacing
        : props.wordPressModule.topPadding.desktopSpacing
      : "0px",
    paddingBottom: props.wordPressModule.bottomPadding
      ? isMobile
        ? props.wordPressModule.bottomPadding.mobileSpacing
        : props.wordPressModule.bottomPadding.desktopSpacing
      : "0px"
  };

  const marginContainerModule = {
    marginTop: props.wordPressModule.topMargin
      ? isMobile
        ? props.wordPressModule.topMargin.mobileSpacing
        : props.wordPressModule.topMargin.desktopSpacing
      : "0px",
    marginBottom: props.wordPressModule.bottomMargin
      ? isMobile
        ? props.wordPressModule.bottomMargin.mobileSpacing
        : props.wordPressModule.bottomMargin.desktopSpacing
      : "0px"
  };

  return (
    <div
      key={props.wordPressModule.name}
      style={{
        marginTop: marginContainerModule.marginTop,
        marginBottom: marginContainerModule.marginBottom,
        position: "relative",

        zIndex:
          props.wordPressModule.name === "NavBarModule22" || props.wordPressModule.name === "gallerySlider"
            ? Z_INDEX_MAX
            : props.wordPressModule.name === "RecipeDetailModule"
            ? Z_INDEX_MAX - 1
            : "auto"
      }}
    >
      <div className={styles["contentComponent"]} style={styleContainerModule}>
        {component}
      </div>
    </div>
  );
};

const getBackgroundStyleProperties = (backgroundModule: Background) => {
  let backgroundProperty;

  if (backgroundModule) {
    if (backgroundModule.backgroundPattern) {
      backgroundProperty = {
        background: `url(${backgroundModule.backgroundPattern})`,
        backgroundPosition: "50% 50%",
        backgroundRepeat: `repeat`
      };
    } else {
      backgroundProperty = {
        background: backgroundModule.backgroundColour
      };
    }
  } else {
    backgroundProperty = {
      background: "#fff"
    };
  }

  return backgroundProperty;
};

export { ModuleComponent };
