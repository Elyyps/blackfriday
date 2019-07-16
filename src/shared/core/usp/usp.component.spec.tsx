import React from "react";
import { shallow } from "enzyme";

import { USP } from "@app/core/usp";
import { generateUSP } from "@app/api/core/usp/endpoints";

describe("[StarsRating]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<USP uspModule={generateUSP()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
