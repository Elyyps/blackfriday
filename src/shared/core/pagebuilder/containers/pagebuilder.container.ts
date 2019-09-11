import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { IPagebuilderComponentProps, PagebuilderComponent } from "@app/core/pagebuilder";
import { IAppState } from "@app/stores";
import { pageThunks } from "@app/middleware";
import { PageModel } from "@app/api/pagebuilder/page.model";
import { settingsActions, IScreenSize, IBlackFridayRootURL, IDistanceTop } from "@app/stores/settings";

interface IStateProps {
  blackFridayRootUrl: IBlackFridayRootURL | undefined;
  currentPage: PageModel | undefined;
  distanceTop: IDistanceTop | undefined;
  screenSize: IScreenSize | undefined;
}
interface IDispatchProps {
  getPage: (route: string) => void;
  setDistanceTop: (distanceTop: number) => void;
  setScreenSize: (screenSize: IScreenSize) => void;
}

const mapStateToProps: MapStateToProps<
  IStateProps,
  IPagebuilderComponentProps & RouteComponentProps,
  IAppState
> = state => {
  const { currentPage } = state.page;
  const { screenSize } = state.settings;
  const blackFridayRootUrl = state.settings.blackFridayRootUrl;
  const distanceTop = state.settings.distanceTop;

  return { currentPage, screenSize, blackFridayRootUrl, distanceTop };
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IPagebuilderComponentProps> = dispatch => ({
  getPage: (route: string) => dispatch(pageThunks.getPage(route)),
  setScreenSize: (screenSize: IScreenSize) => dispatch(settingsActions.setScreenSize({ screenSize })),
  setDistanceTop: (distanceTop: number) => dispatch(settingsActions.setDistanceTop({ distanceTop }))
});

export type PagebuilderContainerProps = IStateProps & IDispatchProps;
export const PagebuilderContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PagebuilderComponent)
);
