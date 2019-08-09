import React from "react";
import { shallow } from "enzyme";
import { CountDownComponent } from "./count-down.component";

describe("[CountDown]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<CountDownComponent />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
