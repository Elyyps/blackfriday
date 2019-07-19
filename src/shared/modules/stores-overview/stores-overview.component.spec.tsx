import React from "react";
import { shallow } from "enzyme";
import { StoresOverviewComponent } from "./stores-overview.component";
import { generateDummyStoresOverview } from "@app/api/modules/stores-overview/generate-dummy-data";

const storesOvervieData = generateDummyStoresOverview();
describe("[StoresOverview]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <StoresOverviewComponent
        filterBar={storesOvervieData.filterBar}
        shopCards={storesOvervieData.shopCards}
        getShopCards={() => ""}
        setShopCards={() => ""}
        totalCards={1}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
