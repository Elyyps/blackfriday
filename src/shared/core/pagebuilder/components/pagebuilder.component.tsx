import * as React from "react";
import { RouteComponentProps } from "react-router";
import { PagebuilderContainerProps } from "../index";

import { EmptyPageComponent } from "@app/core/empty-page";
import { ModuleComponent } from "./module.component";
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
    if (props.location) {
      props.getPage(props.location.pathname);
    }
  }

  public render() {
    return (
      <React.Fragment>
        {!!this.props.currentPage ? (
          <React.Fragment>
            <HelmetComponent {...this.props.currentPage.metaData} />
            {this.props.currentPage.wordPressPostModules.map((wordPressModule, index) => (
              <ModuleComponent wordPressModule={wordPressModule} isMobile={this.props.isMobile} key={index} />
            ))}
          </React.Fragment>
        ) : (
          <EmptyPageComponent />
        )}
      </React.Fragment>
    );
  }
}
