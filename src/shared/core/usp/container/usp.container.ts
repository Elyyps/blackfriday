import { connect, MapStateToProps } from "react-redux";
import { IAppState } from "@app/stores";
import { USP, IUSPProps } from "@app/core/usp";
import { IScreenSize } from "@app/stores/settings";

interface IStateProps {
  screenSize: IScreenSize | undefined;
}

const mapStateToProps: MapStateToProps<IStateProps, IUSPProps, IAppState> = state => {
  const { screenSize } = state.settings;

  return { screenSize };
};

export type USPContainerProps = IStateProps;
export const USPContainer = connect(mapStateToProps)(USP);
