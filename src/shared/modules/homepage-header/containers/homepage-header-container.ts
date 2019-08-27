import { connect, MapStateToProps } from "react-redux";

import { IAppState } from "@app/stores";
import { IBlackFridayDate, IBlackFridayRootURL } from "@app/stores/settings";
import { HomePageHeaderComponent, IHomePageHeaderComponentProps } from "../components/homepage-header.component";

interface IStateProps {
  blackFridayDate: IBlackFridayDate | undefined;
  blackFridayRootUrl: IBlackFridayRootURL | undefined;
}

const mapStateToProps: MapStateToProps<IStateProps, IHomePageHeaderComponentProps, IAppState> = state => {
  const blackFridayDate = state.settings.blackFridayDate;
  const blackFridayRootUrl = state.settings.blackFridayRootUrl;

  return { blackFridayDate, blackFridayRootUrl };
};

export type HomePageHeaderContainerProps = IStateProps;
export const HomePageHeaderContainer = connect(mapStateToProps)(HomePageHeaderComponent);
