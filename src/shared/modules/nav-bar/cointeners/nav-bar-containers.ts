import { connect, MapStateToProps } from "react-redux";

import { IAppState } from "@app/stores";
import { IBlackFridayDate } from "@app/stores/settings";
import { NavBarComponent, INavBarComponentProps } from "..";

interface IStateProps {
  blackFridayDate: IBlackFridayDate | undefined;
}

const mapStateToProps: MapStateToProps<IStateProps, INavBarComponentProps, IAppState> = state => {
  const blackFridayDate = state.settings.blackFridayDate;

  return { blackFridayDate };
};

export type NavBarContainerProps = IStateProps;
export const NavBarContainer = connect(mapStateToProps)(NavBarComponent);
