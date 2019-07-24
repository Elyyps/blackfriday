import React from "react";
import { MobileFilterComponent } from "./mobile-filter.component";
import { mobileFilterDummyData } from "./dummy-data";
import { shallowWithIntl } from "enzyme-react-intl";

describe("[MobileFilter]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallowWithIntl(
      <MobileFilterComponent totalStores={0} onClear={jest.fn} onClose={jest.fn} filterItems={mobileFilterDummyData} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
