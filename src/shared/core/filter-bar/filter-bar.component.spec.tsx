import React from "react";
import { FilterBarComponent } from "./filter-bar.component";
import { generateFilterBarData } from "@app/api/core/filter-bar/endpoint";
import { shallow } from "enzyme";

describe("[FilterBar]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <FilterBarComponent
        applyFilter={() => ""}
        filterBar={generateFilterBarData()}
        onBrandChanged={() => ""}
        onStatusChanged={() => ""}
        onOrderByChanged={() => ""}
        onCategoryChanged={() => ""}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
