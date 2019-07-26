import React from "react";
import { shallow } from "enzyme";
import { TabComponentComponent } from "./tab-component.component";

describe("[tabComponent]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<TabComponentComponent />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
