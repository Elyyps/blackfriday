import { connect, MapStateToProps } from "react-redux";
import { IAppState } from "@app/stores";
import { IScreenSize } from "@app/stores/settings";
import { IMobileFilterComponentProps, MobileFilterComponent } from "../mobile-filter.component";

interface IStateProps {
  screenSize: IScreenSize | undefined;
}

const mapStateToProps: MapStateToProps<IStateProps, IMobileFilterComponentProps, IAppState> = state => {
  const { screenSize } = state.settings;

  return {
    screenSize
  };
};

export type MobileFilterContainerProps = IStateProps;
export const MobileFilterContainer = connect(mapStateToProps)(MobileFilterComponent);
