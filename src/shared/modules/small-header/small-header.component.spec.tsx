import React from "react";
import { shallow } from "enzyme";
import { SmallHeaderComponent } from "./small-header.component";

describe("[SmallHeader]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<SmallHeaderComponent title="Black Friday 2019 blog" />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
