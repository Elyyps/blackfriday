import React from "react";
import { shallow } from "enzyme";
import { HomePageHeaderComponent } from "../homepage-header";

import { getHeaderpageHeader } from "@app/api/modules/homepage-header/endpoints";
describe("[homepageHeader]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<HomePageHeaderComponent homePageModule={getHeaderpageHeader()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
