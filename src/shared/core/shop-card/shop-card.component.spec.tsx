import React from "react";
import { ShopCardComponent } from "./shop-card.component";
import { generateSingleStoreDummyData } from "@app/api/core/store/generate-dummy-data";
import { shallowWithIntl } from "enzyme-react-intl";

describe("[ShopCard]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallowWithIntl(<ShopCardComponent store={generateSingleStoreDummyData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
