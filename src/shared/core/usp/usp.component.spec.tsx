import React from "react";
import { shallow } from "enzyme";
import { USP } from "./usp.component";
import { generateUSP } from "@app/api/core/usp/endpoints";

describe("[StarsRating]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<USP uspModule={generateUSP()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
