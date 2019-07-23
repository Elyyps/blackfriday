import React from "react";
import { shallow } from "enzyme";
import { FeaturedCategoriesComponent } from "./featured-categories.component";

describe("[FeaturedCategories]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<FeaturedCategoriesComponent />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
