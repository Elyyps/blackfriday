import React from "react";
import { ViewType } from "@app/stores/settings";
import { shallowWithIntl } from "enzyme-react-intl";
import { FilterBarDeals } from "./filter-bar-deals.component";
/* tslint:disable */
describe("[FilterBarDeals]", () => {
  it("should render without crashing", () => {
    const renderedComponent = shallowWithIntl(
      <FilterBarDeals
        filtersChanged={jest.fn()}
        brandFilterItems={[]}
        categoryFilterItems={[]}
        screenSize={{ breakpointPixels: 0, viewType: ViewType.Desktop }}
        sortBy=""
        totalResults={100}
        clearFilters={jest.fn()}
        setBrandFilters={jest.fn()}
        setCategoryFilters={jest.fn()}
        setSortBy={jest.fn()}
        setStoreFilters={jest.fn()}
        storeFilterItems={[]}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
