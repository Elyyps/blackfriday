import React from "react";
import { shallow } from "enzyme";

import { FilterBarComponent } from "@app/core/filter-bar";
import { generateFilterBarData } from "@app/api/core/filter-bar/endpoint";

describe("[FilterBarComponent]", () => {
  it("should render without crashing", () => {
    const renderedComponent = shallow(
      <FilterBarComponent
        applyFilter={jest.fn()}
        filterBar={generateFilterBarData()}
        onBrandChanged={jest.fn()}
        onStatusChanged={jest.fn()}
        onOrderByChanged={jest.fn()}
        onCategoryChanged={jest.fn()}
      />
    );

    expect(renderedComponent).toMatchSnapshot();
  });
});
