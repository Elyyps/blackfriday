import React from "react";
import { shallow } from "enzyme";
import { LabelComponent } from "./label.component";

describe("[LabelComponent]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<LabelComponent text={"Black Friday 2019: NOG 10 dagen!"} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
