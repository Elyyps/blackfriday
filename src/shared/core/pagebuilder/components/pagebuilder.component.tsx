import * as React from "react";
import { RouteComponentProps } from "react-router";
import { PagebuilderContainerProps } from "../index";

import { EmptyPageComponent } from "@app/core/empty-page";
import { ModuleComponent } from "./module.component";
import { HelmetComponent } from "./helmet.component";

export interface IPagebuilderComponentProps {}

const Z_INDEX_MAX = 100;
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
              <div
                style={{
                  marginTop: wordPressModule.topMargin,
                  marginBottom: wordPressModule.bottomMargin,
                  position: "relative",
                  zIndex:
                    wordPressModule.name === "Navbar" || wordPressModule.name === "gallerySlider"
                      ? Z_INDEX_MAX
                      : wordPressModule.name === "RecipeDetailModule"
                      ? Z_INDEX_MAX - 1
                      : "auto"
                }}
                key={index}
              >
                <ModuleComponent wordPressModule={wordPressModule} isMobile={this.props.isMobile} />
              </div>
            ))}
          </React.Fragment>
        ) : (
          <EmptyPageComponent />
        )}
      </React.Fragment>
    );
  }
}
