import * as React from "react";
import { RouteComponentProps } from "react-router";
import ReactGA from "react-ga";

import { PagebuilderContainerProps } from "../index";
import { EmptyPageComponent } from "@app/core/empty-page";
import { ModuleComponent } from "./module.component";
import { getViewType } from "@app/util/detect-view";
import { HelmetComponent } from "./helmet.component";

export interface IPagebuilderComponentProps {}

// use this when calling the actual API
// const getRoute = (pathname: string) => getConfig().BASE_URL + pathname;

type IState = {};

export class PagebuilderComponent extends React.Component<
  IPagebuilderComponentProps & PagebuilderContainerProps & RouteComponentProps,
  IState
> {
  public constructor(props: IPagebuilderComponentProps & PagebuilderContainerProps & RouteComponentProps) {
    super(props);
    ReactGA.initialize("UA-145384203-1");

    if (props.location) {
      props.getPage(props.location.pathname);
      ReactGA.pageview(props.location.pathname);
    }

    if (typeof window === "object") {
      window.scroll(0, 0);
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
            <HelmetComponent {...this.props.currentPage.metaData} />
            {this.props.currentPage.wordPressPostModules.map((wordPressModule, index) => (
              <ModuleComponent wordPressModule={wordPressModule} screenSize={this.props.screenSize} key={index} />
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
