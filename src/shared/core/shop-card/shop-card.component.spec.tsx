import React from "react";
import { shallow } from "enzyme";
import { ShopCardComponent } from "./shop-card.component";

describe("[ShopCard]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <ShopCardComponent buttonLink="" seeMoreLink="" seeMoreText="" />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});

  