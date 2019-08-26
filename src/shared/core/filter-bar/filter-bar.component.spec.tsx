import React from "react";
import { FilterBar } from "@app/core/filter-bar/filter-bar.component";
import { ViewType } from "@app/stores/settings";
import { shallowWithIntl } from "enzyme-react-intl";
/* tslint:disable */
describe("[FilterBar]", () => {
  it("should render without crashing", () => {
    const renderedComponent = shallowWithIntl(
      <FilterBar
        filtersChanged={jest.fn()}
        brandFilterItems={[]}
        categoryFilterItems={[]}
        screenSize={{ breakpointPixels: 0, viewType: ViewType.Desktop }}
        sortBy=""
        statusFilterItems={[]}
        totalResults={100}
        clearFilters={jest.fn()}
        setBrandFilters={jest.fn()}
        setCategoryFilters={jest.fn()}
        setSortBy={jest.fn()}
        setStatusFilters={jest.fn()}
      />
    );

    expect(renderedComponent).toMatchSnapshot();
  });
});
