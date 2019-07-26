import React from "react";
import { shallow } from "enzyme";
import { FeaturedCategoriesContainer } from "@app/modules/featured-categories/container";
import { generateDummyFeaturedCategoriesData } from "@app/api/modules/featured-categories/generate-dummy-data";

describe("[FeaturedCategories]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <FeaturedCategoriesContainer featuredCategoriesModule={generateDummyFeaturedCategoriesData()} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
