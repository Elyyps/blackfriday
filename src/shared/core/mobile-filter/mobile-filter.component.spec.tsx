import React from "react";
import { MobileFilterComponent } from "./mobile-filter.component";
import { mobileFilterDummyData } from "./dummy-data";
import { shallowWithIntl } from "enzyme-react-intl";
import { ViewType } from "@app/stores/settings";
import { breakPointDesktop } from "@app/util/detect-view";

describe("[MobileFilter]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallowWithIntl(
      <MobileFilterComponent
        screenSize={{ viewType: ViewType.Desktop, breakpointPixels: breakPointDesktop }}
        totalStores={0}
        onClear={jest.fn}
        onFinish={jest.fn}
        onFilterChange={jest.fn}
        filterItems={mobileFilterDummyData}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
