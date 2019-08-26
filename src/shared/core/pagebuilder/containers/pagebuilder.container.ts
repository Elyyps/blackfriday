import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { IPagebuilderComponentProps, PagebuilderComponent } from "@app/core/pagebuilder";
import { IAppState } from "@app/stores";
import { pageThunks } from "@app/middleware";
import { PageModel } from "@app/api/pagebuilder/page.model";
import { settingsActions, IScreenSize } from "@app/stores/settings";

interface IStateProps {
  currentPage: PageModel | undefined;
  screenSize: IScreenSize | undefined;
}
interface IDispatchProps {
  getPage: (route: string) => void;
  setScreenSize: (screenSize: IScreenSize) => void;
}

const mapStateToProps: MapStateToProps<
  IStateProps,
  IPagebuilderComponentProps & RouteComponentProps,
  IAppState
> = state => {
  const { currentPage } = state.page;
  const { screenSize } = state.settings;

  return { currentPage, screenSize };
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IPagebuilderComponentProps> = dispatch => ({
  getPage: (route: string) => dispatch(pageThunks.getPage(route)),
  setScreenSize: (screenSize: IScreenSize) => dispatch(settingsActions.setScreenSize({ screenSize }))
});

export type PagebuilderContainerProps = IStateProps & IDispatchProps;
export const PagebuilderContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PagebuilderComponent)
);
