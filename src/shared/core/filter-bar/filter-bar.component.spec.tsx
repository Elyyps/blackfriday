import React from "react";
import { FilterBarComponent } from "./filter-bar.component";
import { generateFilterBarData } from "@app/api/core/filter-bar/endpoint";
import { shallow } from "enzyme";

describe("[FilterBar]", () => {
  it("should render component without crashing", () => {
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
