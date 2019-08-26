import React from "react";
import { shallow } from "enzyme";

import { PagebuilderComponent, IPagebuilderComponentProps } from "@app/core/pagebuilder";
import { getMockRouterProps } from "@app/util/get-mock-router-props";
import { generatePageModel } from "./dummy-data-generator";
jest.mock("@app/api", () => "");

describe("[PagebuilderComponent]", () => {
  it("should render without modules without crashing", () => {
    const routerProps = getMockRouterProps<IPagebuilderComponentProps>();
    const page = generatePageModel("1", false);

    const renderedComponent = shallow(
      <PagebuilderComponent
        history={routerProps.history}
        location={routerProps.location}
        staticContext={routerProps.staticContext}
        match={routerProps.match}
        currentPage={page}
        getPage={jest.fn()}
        screenSize={undefined}
        setScreenSize={jest.fn()}
      />
    );

    expect(renderedComponent).toMatchSnapshot();
  });

  it("should render with 2 modules without crashing", () => {
    const routerProps = getMockRouterProps<IPagebuilderComponentProps>();
    const page = generatePageModel("1", true);

    const renderedComponent = shallow(
      <PagebuilderComponent
        history={routerProps.history}
        location={routerProps.location}
        staticContext={routerProps.staticContext}
        match={routerProps.match}
        currentPage={page}
        getPage={jest.fn()}
        screenSize={undefined}
        setScreenSize={jest.fn()}
      />
    );

    expect(renderedComponent).toMatchSnapshot();
  });
});
