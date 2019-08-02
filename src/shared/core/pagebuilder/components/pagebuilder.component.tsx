import * as React from "react";
import { RouteComponentProps } from "react-router";
import { PagebuilderContainerProps } from "../index";

import { EmptyPageComponent } from "@app/core/empty-page";
import { ModuleComponent } from "./module.component";
import { HelmetComponent } from "./helmet.component";
import { getViewType } from "@app/util/detect-view";
import { ViewType } from "@app/stores/settings";

export interface IPagebuilderComponentProps {}

// use this when calling the actual API
// const getRoute = (pathname: string) => getConfig().BASE_URL + pathname;

type IState = {};

export class PagebuilderComponent extends React.Component<
  IPagebuilderComponentProps & PagebuilderContainerProps & RouteComponentProps,
  IState
> {
  private isMobile =
    this.props.screenSize &&
    (this.props.screenSize.viewType === ViewType.Mobile || this.props.screenSize.viewType === ViewType.Tablet)
      ? true
      : false;

  public constructor(props: IPagebuilderComponentProps & PagebuilderContainerProps & RouteComponentProps) {
    super(props);
    if (props.location) {
      props.getPage(props.location.pathname);
    }

    if (typeof window === "object") {
      window.addEventListener("resize", this.handleResize.bind(this));
      this.setScreenSize();
    }
  }

  public componentWillUnmount() {
    if (typeof window === "object") {
      window.removeEventListener("resize", this.handleResize.bind(this));
    }
  }

  public render() {
    return (
      <React.Fragment>
        {!!this.props.currentPage ? (
          <React.Fragment>
            {/* <HelmetComponent {...this.props.currentPage.metaData} /> */}
            {this.props.currentPage.wordPressPostModules.map((wordPressModule, index) => (
              <ModuleComponent wordPressModule={wordPressModule} isMobile={this.isMobile} key={index} />
            ))}
          </React.Fragment>
        ) : (
          <EmptyPageComponent />
        )}
      </React.Fragment>
    );
  }

  private handleResize() {
    this.setScreenSize();
  }

  private setScreenSize() {
    const screenSize = getViewType(window.innerWidth);

    if (this.props.screenSize === undefined || this.props.screenSize.viewType !== screenSize.viewType) {
      this.props.setScreenSize(screenSize);
    }
  }
}
