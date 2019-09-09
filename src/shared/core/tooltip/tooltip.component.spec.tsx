
import React from "react";
import { shallow } from "enzyme";
import { TooltipComponent } from "./tooltip.component";

describe("[Tooltip]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <TooltipComponent />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});

  