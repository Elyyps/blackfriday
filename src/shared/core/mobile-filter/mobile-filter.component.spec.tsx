
import React from "react";
import { shallow } from "enzyme";
import { MobileFilterComponent } from "./mobile-filter.component";

describe("[MobileFilter]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <MobileFilterComponent />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});

  