import React from "react";
import { shallow } from "enzyme";
import { ShopSingleHeaderComponent } from "./shop-single-header.component";
import { generatedummyShopSingleHeaderData } from "@app/api/modules/shop-single-header/generate-dummy-data";

describe("[ShopSingleHeader]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <ShopSingleHeaderComponent shopSingleHeaderModule={generatedummyShopSingleHeaderData()} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
