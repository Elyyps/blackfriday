import { connect, MapStateToProps } from "react-redux";

import { IAppState } from "@app/stores";
import { IBlackFridayDate, IBlackFridayRootURL } from "@app/stores/settings";
import { HomePageHeaderComponent, IHomePageHeaderComponentProps } from "../components/homepage-header.component";

interface IStateProps {
  blackFridayDate: IBlackFridayDate | undefined;
}

const mapStateToProps: MapStateToProps<IStateProps, IHomePageHeaderComponentProps, IAppState> = state => {
  const blackFridayDate = state.settings.blackFridayDate;

  return { blackFridayDate };
};

export type HomePageHeaderContainerProps = IStateProps;
export const HomePageHeaderContainer = connect(mapStateToProps)(HomePageHeaderComponent);
