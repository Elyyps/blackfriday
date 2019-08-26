import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { LocationSwitchComponent } from "./location-switch.component";
import { IAppState } from "@app/stores";
import { locationActions } from "@app/stores/location";

interface IStateProps {
  currentLocation: string;
}
interface IDispatchProps {
  onLocationSwitch: (location: string) => void;
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IAppState> = state => {
  const { location } = state.locations;

  return { currentLocation: location };
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = dispatch => ({
  onLocationSwitch: (location: string) => dispatch(locationActions.setLocation({ location }))
});

export interface ILocationSwitchContainerProps extends IStateProps, IDispatchProps {}
export const LocationSwitchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationSwitchComponent);
