import { connect, MapStateToProps } from "react-redux";

import { IAppState } from "@app/stores";
import { IBlackFridayDate } from "@app/stores/settings";
import { HomePageHeaderComponent, IHomePageHeaderComponentProps } from "../components/homepage-header.component";

interface IStateProps {
  blackFridayDate: IBlackFridayDate | undefined;
  totalResults: number;
}

const mapStateToProps: MapStateToProps<IStateProps, IHomePageHeaderComponentProps, IAppState> = state => {
  const blackFridayDate = state.settings.blackFridayDate;
  const { totalResults } = state.storeOverview;

  return { blackFridayDate, totalResults };
};

export type HomePageHeaderContainerProps = IStateProps;
export const HomePageHeaderContainer = connect(mapStateToProps)(HomePageHeaderComponent);
