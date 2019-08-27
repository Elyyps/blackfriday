import * as React from "react";
import styles from "./location-switch-component.module.scss";
import { ILocationSwitchContainerProps } from "./location-switch.container";
import { LOCATIONS } from "@app/constants";

export interface ILanguageSwitchComponentProps {}

const LocationSwitchComponent = (props: ILocationSwitchContainerProps) => {
  const switchLocation = () => {
    const newLocation = props.currentLocation === LOCATIONS.NL ? LOCATIONS.NL : LOCATIONS.BL;
    console.log(newLocation);
    props.onLocationSwitch(newLocation);
  };

  return (
    <div className={styles["menu-language-switch"]}>
      <span role="button" onClick={switchLocation}>
        {props.currentLocation === LOCATIONS.NL ? <h6>Pays Bas</h6> : <h6>Belgique</h6>}
      </span>
    </div>
  );
};
// const [location, setLocation] = React.useState("Pays bas");

export { LocationSwitchComponent };
