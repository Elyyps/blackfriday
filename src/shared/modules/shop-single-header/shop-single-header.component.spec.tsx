import React from "react";
import { shallowWithIntl } from "enzyme-react-intl";
import { ShopSingleHeaderComponent } from "./shop-single-header.component";
import { generatedummyShopSingleHeaderData } from "@app/api/modules/shop-single-header/generate-dummy-data";
import { ViewType } from "@app/stores/settings";

describe("[ShopSingleHeader]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallowWithIntl(
      <ShopSingleHeaderComponent
        screenSize={{ breakpointPixels: 0, viewType: ViewType.Desktop }}
        shopSingleHeaderModule={generatedummyShopSingleHeaderData()}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
