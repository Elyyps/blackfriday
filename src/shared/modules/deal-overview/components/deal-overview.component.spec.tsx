import React from "react";
import { shallowWithIntl } from "enzyme-react-intl";
import { ViewType } from "@app/stores/settings";
import { DealOverview, getTotalHeight } from "./deal-overview.component";
import { generateDealOverviewModule } from "@app/api/modules/deal-overview/generate-dummy-data";

/* tslint:disable */
describe("[DealsOverview]", () => {
  it("should render without crashing", () => {
    const renderedComponent = shallowWithIntl(
      <DealOverview
        brandFilterItems={[]}
        categoryFilterItems={[]}
        screenSize={{ breakpointPixels: 0, viewType: ViewType.Desktop }}
        sortBy=""
        deals={[]}
        totalResults={100}
        dealOverviewModule={generateDealOverviewModule()}
        setBrandFilters={jest.fn()}
        setCategoryFilters={jest.fn()}
        setStoreFilters={jest.fn()}
        storeFilterItems={[]}
        getDeals={jest.fn()}
        clearAllFilters={jest.fn()}
        setSortBy={jest.fn()}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  it("should get proper total height for many stores", () => {
    const totalHeight = getTotalHeight(ViewType.DesktopFull, 200);
    expect(totalHeight).toBe(11520);
  });
  it("should get proper total height for many stores mobile", () => {
    const totalHeight = getTotalHeight(ViewType.Mobile, 200);
    expect(totalHeight).toBe(33600);
  });
  it("should get proper total height for few stores", () => {
    const totalHeight = getTotalHeight(ViewType.DesktopFull, 5);
    expect(totalHeight).toBe(288);
  });
  it("should get proper total height for few stores mobile", () => {
    const totalHeight = getTotalHeight(ViewType.Mobile, 5);
    expect(totalHeight).toBe(840);
  });
});
