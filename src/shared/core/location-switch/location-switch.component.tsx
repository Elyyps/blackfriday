import * as React from "react";
import styles from "./location-switch-component.module.scss";
import { ILocationSwitchContainerProps } from "./location-switch.container";
import { LOCATIONS } from "@app/constants";

export interface ILanguageSwitchComponentProps {}

const LocationSwitchComponent = (props: ILocationSwitchContainerProps) => (
  <div className={styles["menu-language-switch"]}>
    <span role="button" onClick={() => switchLocation(props)}>
      {props.currentLocation}
      {/* {props.currentLocation === LOCATIONS.NL ? <h6>Pays Bas</h6> : <h6>Belgique</h6>} */}
    </span>
  </div>
);
// const [location, setLocation] = React.useState("Pays bas");
const switchLocation = (props: ILocationSwitchContainerProps) => {
  const newLocation = props.currentLocation === LOCATIONS.NL ? LOCATIONS.BL : LOCATIONS.NL;
  // alert(newLocation);
  props.onLocationSwitch(newLocation);
};
export { LocationSwitchComponent };
