import React from "react";
import { shallow } from "enzyme";
import { generateArrowPanelData } from "@app/api/core/arrow-panel/generate-dummy-data";
import { FeaturedCategoriesContainer } from "@app/modules/featured-categories/container";

describe("[FeaturedCategories]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<FeaturedCategoriesContainer categoryItems={generateArrowPanelData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
