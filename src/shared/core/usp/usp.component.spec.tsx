import React from "react";
import { shallow } from "enzyme";

import { generateUSP } from "@app/api/core/usp/endpoints";
import { USPContainer } from "./container";

describe("[StarsRating]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<USPContainer uspModule={generateUSP()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
