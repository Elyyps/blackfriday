import React from "react";
import { shallow } from "enzyme";
import { TimeLeftBarComponent } from "./time-left-bar.component";

describe("[TimeLeftBar]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<TimeLeftBarComponent range={1} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
