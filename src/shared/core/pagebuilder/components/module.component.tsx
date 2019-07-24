import React, { useState, useEffect } from "react";

import { isMobileView } from "@app/util/detect-view";
import { getComponent } from "@app/util/get-modules-from-page";

import styles from "./module-component.module.scss";
import { WordPressPostModule } from "@app/api/modules/wordpress-module/wordpress-module";
import { Background } from "@app/api/core/background";

export interface IModuleComponentProps {
  isMobile: boolean;
  wordPressModule: WordPressPostModule;
}

const Z_INDEX_MAX = 100;

const ModuleComponent = (props: IModuleComponentProps) => {
  const component = getComponent(props.wordPressModule);
  const isMobile = useIsMobile(props.isMobile);

  const styleMainContainerModule = {
    ...getBackgroundStyleProperties(props.wordPressModule.background as Background),
    paddingTop: props.wordPressModule.topPadding
      ? isMobile
        ? props.wordPressModule.topPadding.mobilePadding
        : props.wordPressModule.topPadding.desktopPadding
      : "0px",
    paddingBottom: props.wordPressModule.bottomPadding
      ? isMobile
        ? props.wordPressModule.bottomPadding.mobilePadding
        : props.wordPressModule.bottomPadding.desktopPadding
      : "0px"
  };

  return (
    <div
      style={{
        marginTop: props.wordPressModule.topMargin,
        marginBottom: props.wordPressModule.bottomMargin,
        position: "relative",
        zIndex:
          props.wordPressModule.name === "NavBarModule" || props.wordPressModule.name === "gallerySlider"
            ? Z_INDEX_MAX
            : props.wordPressModule.name === "RecipeDetailModule"
            ? Z_INDEX_MAX - 1
            : "auto"
      }}
    >
      <div className={styles["contentComponent"]} style={styleMainContainerModule}>
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

const useIsMobile = (defaultValue: boolean) => {
  const isClient = typeof window === "object";

  const getIsMobile = () => {
    if (isClient) {
      return isMobileView(window.innerWidth);
    }

    return defaultValue;
  };

  const [isMobile, setIsMobile] = useState(defaultValue);

  useEffect(() => {
    if (!isClient) {
      return undefined;
    }

    const handleResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export { ModuleComponent };
