import React from "react";
import { shallowWithIntl } from "enzyme-react-intl";

import { MobileFilterComponent } from "./mobile-filter.component";
import { mobileFilterDummyData } from "./dummy-data";

describe("[MobileFilter]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallowWithIntl(
      <MobileFilterComponent totalStores={0} onClear={jest.fn} onClose={jest.fn} filterItems={mobileFilterDummyData} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
