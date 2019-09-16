import * as React from "react";
import { RouteComponentProps } from "react-router";
import TagManager from "react-gtm-module";
import { PagebuilderContainerProps } from "../index";
import { EmptyPageComponent } from "@app/core/empty-page";
import { ModuleComponent } from "./module.component";
import { getViewType } from "@app/util/detect-view";
import { HelmetComponent } from "./helmet.component";
import { IBlackFridayRootURL } from "@app/stores/settings";
import { StickyContainer } from "react-sticky";
import cssVars from "css-vars-ponyfill";

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

    const tagManagerArgs = {
      gtmId: "GTM-MDXLS3M",
      auth: "QLhJ-9IEHYtgJSvEkPfoIg",
      preview: "env-2"
    };

    if (props.location) {
      props.getPage(props.location.pathname);
    }

    if (typeof window === "object") {
      window.scroll(0, 0);
      window.addEventListener("resize", this.handleResize.bind(this));
      this.setScreenSize();
      TagManager.initialize(tagManagerArgs);
    }
    const red = "225,10,20";
    const orange = "255,106,4";

    if (
      typeof document === "object" &&
      ((this.props.blackFridayRootUrl as IBlackFridayRootURL).rootUrl as string).includes(".be")
    ) {
      // document.documentElement.style.setProperty("--colour-version-website", red);
      cssVars({
        variables: {
          "--colour-version-website": red
        }
      });
    } else if (
      typeof document === "object" &&
      ((this.props.blackFridayRootUrl as IBlackFridayRootURL).rootUrl as string).includes(".nl")
    ) {
      // document.documentElement.style.setProperty("--colour-version-website", orange);
      cssVars({
        variables: {
          "--colour-version-website": orange
        }
      });
    } else {
      cssVars({
        variables: {
          "--colour-version-website": orange
        }
      });
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
            <StickyContainer>
              <HelmetComponent {...this.props.currentPage.metaData} />

              {this.props.currentPage.wordPressPostModules.map((wordPressModule, index) => (
                <ModuleComponent wordPressModule={wordPressModule} screenSize={this.props.screenSize} key={index} />
              ))}
            </StickyContainer>
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
