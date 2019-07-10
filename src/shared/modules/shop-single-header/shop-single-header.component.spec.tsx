
import React from "react";
import { shallow } from "enzyme";
import { ShopSingleHeaderComponent } from "./shop-single-header.component";

describe("[ShopSingleHeader]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <ShopSingleHeaderComponent />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});

  