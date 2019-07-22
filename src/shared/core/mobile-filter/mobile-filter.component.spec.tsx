import React from "react";
import { shallow } from "enzyme";
import { MobileFilterComponent } from "./mobile-filter.component";
import { mobileFilterDummyData } from "./dummy-data";

describe("[MobileFilter]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <MobileFilterComponent totalStores={0} onClear={jest.fn} onClose={jest.fn} filterItems={mobileFilterDummyData} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
