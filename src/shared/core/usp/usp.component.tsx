import React, { useState, useEffect } from "react";
import styles from "./usp-component.module.scss";
import { isTabletView } from "@app/util/detect-view";
import { Link } from "react-router-dom";
import { IconComponent } from "@app/core";
import { UspModule } from "@app/api/core/usp/usp";
import { IconLink } from "@app/api/core/icon-link";

interface IUSPProps {
  uspModule: UspModule;
}

type UspPropsWrapper = {
  usp: IconLink;
  visible: boolean;
};

const timerIntervalDuration = 3000;
let timerInterval: NodeJS.Timeout;

const USP = (props: IUSPProps) => {
  const isMobile = useIsMobile(false);
  const [uspItems, setUspItems] = useState<UspPropsWrapper[]>(
    createUspPropsWrapperArray([...props.uspModule.uniqueSellingPoints], false)
  );

  const startFadingSlider: () => NodeJS.Timeout = () => {
    let selectedElement = 0;
    setUspItems(setUspVisibility(uspItems, selectedElement));

    return (timerInterval = setInterval(() => {
      if (selectedElement + 1 > uspItems.length - 1) {
        selectedElement = 0;
      } else {
        selectedElement += 1;
      }
      setUspItems(setUspVisibility(uspItems, selectedElement));
    }, timerIntervalDuration));
  };

  const stopFadingSlider = () => {
    clearInterval(timerInterval);
    setUspItems(setUspVisibility(uspItems));
  };

  useEffect(() => {
    if (isMobile) {
      setUspItems(setUspVisibility(uspItems, 0));
    }
  }, []);

  useEffect(() => {
    if (isMobile) {
      setUspItems(setUspVisibility(uspItems, 0));
      startFadingSlider();
    } else {
      stopFadingSlider();
    }
  }, [isMobile]);

  return (
    <div id="uspHolder" className={styles["usp"]}>
      {uspItems.map((item, index) => (
        <div key={index} className={styles["usp__item"]} style={setStyle(item.visible)}>
          <Link to={item.usp.link.url} className={styles["usp__link"]}>
            <IconComponent icon={item.usp.icon} size="14px" fillColor="#777" />
            <span style={{ marginLeft: "10px" }}>{item.usp.link.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

const setStyle = (isVisible: boolean) =>
  isVisible ? { opacity: 1, display: "flex" } : { opacity: 0, display: "flex" };

const createUspPropsWrapperArray = (array: IconLink[], visibleState: boolean): UspPropsWrapper[] =>
  array.map(item => ({ usp: item, visible: visibleState }));

const setUspVisibility = (array: UspPropsWrapper[], visibleItem?: number) =>
  array.map((item, index) => {
    if (typeof visibleItem !== "undefined") {
      index === visibleItem ? (item.visible = true) : (item.visible = false);

      return item;
    }
    item.visible = true;

    return item;
  });

const useIsMobile = (defaultValue: boolean) => {
  const isClient = typeof window === "object";

  const getIsMobile = () => {
    if (isClient) {
      return isTabletView(window.innerWidth);
    }

    return defaultValue;
  };

  const [isMobile, setIsMobile] = useState(getIsMobile());

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

export { USP };
