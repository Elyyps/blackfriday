import React from "react";
import { shallow } from "enzyme";

import { CountDownContainer } from "../containers/count-down-conainers";

describe("[CountDown]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<CountDownContainer isFullVersion />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
