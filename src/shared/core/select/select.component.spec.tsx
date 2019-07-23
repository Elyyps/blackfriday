
import React from "react";
import { shallow } from "enzyme";
import { SelectComponent } from "./select.component";

describe("[Select]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <SelectComponent />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});

  