import React from "react";
import { shallow } from "enzyme";
import { IconComponent } from "./";
import IconDefault from "@assets/icons/link.svg";

describe("[IconComponent]", () => {
  it("Should render original icon without crashing", () => {
    const renderedComponent = shallow(<IconComponent icon={IconDefault} size="14px" />);
    expect(renderedComponent).toMatchSnapshot();
  });
  it("Should render icon with stroke and strokeWidth without crashing", () => {
    const renderedComponent = shallow(
      <IconComponent icon={IconDefault} strokeColor="red" strokeWidth="2px" size="24px" />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
  it("Should render icon with fill without crashing", () => {
    const renderedComponent = shallow(<IconComponent icon={IconDefault} fillColor="red" size="24px" />);
    expect(renderedComponent).toMatchSnapshot();
  });
  it("Should render icon with fill and stroke without crashing", () => {
    const renderedComponent = shallow(
      <IconComponent icon={IconDefault} strokeColor="red" fillColor="red" size="24px" />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
