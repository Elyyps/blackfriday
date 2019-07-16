import React from "react";
import { shallow } from "enzyme";
import { BackLinkComponent } from "./back-button.component";

describe("[BackLink]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<BackLinkComponent />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
