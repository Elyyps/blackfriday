import React from "react";
import { shallow } from "enzyme";
import { ShopCardComponent } from "./shop-card.component";
import { generateSingleStoreDummyData } from "@app/api/core/store/generate-dummy-data";

describe("[ShopCard]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<ShopCardComponent store={generateSingleStoreDummyData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
