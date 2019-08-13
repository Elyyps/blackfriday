import React from "react";
import { shallow } from "enzyme";

import { getHeaderpageHeader } from "@app/api/modules/homepage-header/endpoints";
import { HomePageHeaderContainer } from "../containers/homepage-header-container";
describe("[homepageHeader]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<HomePageHeaderContainer homePageModule={getHeaderpageHeader()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
