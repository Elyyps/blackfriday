import React from "react";
import { MobileFilterComponent } from "./mobile-filter.component";
import { mobileFilterDummyData } from "./dummy-data";
import { shallow } from "enzyme";

describe("[MobileFilter]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <MobileFilterComponent totalStores={0} onClear={jest.fn} onClose={jest.fn} filterItems={mobileFilterDummyData} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
