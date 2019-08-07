import React, { useState, useEffect } from "react";
import styles from "./usp-component.module.scss";
import { Link } from "react-router-dom";
import { IconComponent } from "@app/core";
import { UspModule } from "@app/api/core/usp/usp";
import { USPContainerProps } from "./container";
import { breakPointTablet } from "@app/util/detect-view";
import { useInterval } from "@app/util/interval";

export interface IUSPProps {
  uspModule: UspModule;
}

const FIRST_ITEM_TO_SHOW_ON_MOBILE = 0;

const timerIntervalDuration = 3000;

const USP = (props: IUSPProps & USPContainerProps) => {
  const [itemToShow, setItemToShow] = useState(FIRST_ITEM_TO_SHOW_ON_MOBILE);
  const { uniqueSellingPoints } = props.uspModule;
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const IS_TABLET = (props.screenSize && props.screenSize.breakpointPixels <= breakPointTablet) || false;
    setIsTablet(IS_TABLET);
  }, [props.screenSize]);

  useInterval(
    () => {
      setNextVisibleElement();
    },
    isTablet ? timerIntervalDuration : null
  );

  const setNextVisibleElement = () => {
    const itemToShowNext = itemToShow + 1;
    if (itemToShowNext === uniqueSellingPoints.length) {
      setItemToShow(0);
    } else {
      setItemToShow(itemToShow + 1);
    }
  };

  return (
    <div id="uspHolder" className={styles["usp"]}>
      {uniqueSellingPoints.map((item, index) => {
        let itemVisibility = 1;
        if (isTablet) {
          itemVisibility = index === itemToShow ? 1 : 0;
        }

        return (
          <div key={index} className={styles["usp__item"]} style={{ display: "flex", opacity: itemVisibility }}>
            <Link to={item.link.url} className={styles["usp__link"]}>
              <IconComponent icon={item.icon} size="14px" fillColor="#777" />
              <span style={{ marginLeft: "10px" }}>{item.link.title}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export { USP };
