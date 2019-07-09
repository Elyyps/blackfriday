import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { IPagebuilderComponentProps, PagebuilderComponent } from "@app/core/pagebuilder";
import { IAppState } from "@app/stores";
import { pageThunks } from "@app/middleware";
import { PageModel } from "@app/api/pagebuilder/page.model";

interface IStateProps {
  currentPage: PageModel | undefined;
  isMobile: boolean;
}
interface IDispatchProps {
  getPage: (route: string) => void;
}

const mapStateToProps: MapStateToProps<
  IStateProps,
  IPagebuilderComponentProps & RouteComponentProps,
  IAppState
> = state => {
  const { currentPage } = state.page;
  const { isMobile } = state.settings;

  return { currentPage, isMobile };
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IPagebuilderComponentProps> = dispatch => ({
  getPage: (route: string) => dispatch(pageThunks.getPage(route))
});

export type PagebuilderContainerProps = IStateProps & IDispatchProps;
export const PagebuilderContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PagebuilderComponent)
);
