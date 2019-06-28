import React from "react";
import { shallow } from "enzyme";
import { IconComponent } from "./";
import IconDefault from "@assets/icons/link.svg";

describe("[IconComponent]", () => {
  it("Should icon without crashing", () => {
    const renderedComponent = shallow(
      <IconComponent icon={IconDefault} size="14px" />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
