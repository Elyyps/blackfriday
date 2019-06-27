import React from "react";
import { shallow } from "enzyme";
import { FeaturedShopsComponent } from "./featured-shops.component";

describe("[FeaturedShops]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<FeaturedShopsComponent />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
