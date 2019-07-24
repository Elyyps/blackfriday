import React from "react";
import { shallow } from "enzyme";
import { StoresOverviewComponent } from "./stores-overview.component";
import { generateDummyStoresOverview } from "@app/api/modules/stores-overview/generate-dummy-data";

describe("[StoresOverview]", () => {
  it("should render component without crashing", () => {
    const storesOverviewData = generateDummyStoresOverview();
    const renderedComponent = shallow(
      <StoresOverviewComponent
        filterBar={storesOverviewData.filterBar}
        shopCards={[]}
        getShopCards={jest.fn()}
        setShopCards={jest.fn()}
        totalCards={1}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
