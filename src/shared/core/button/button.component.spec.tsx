import React from "react";
import { shallow } from "enzyme";
import { Button } from "./";
import IconDefault from "@assets/icons/link.svg";

describe("[Button]", () => {
  it("Should render button with icon right without crashing", () => {
    const renderedComponent = shallow(
      <Button icon={IconDefault} iconPosition="right" title="Primary" variant="primary-default" />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
  it("Should render button with icon left and full width without crashing", () => {
    const renderedComponent = shallow(
      <Button icon={IconDefault} iconPosition="left" title="Primary" variant="primary-default" fullWidth />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
  it("Should render button without icon without crashing", () => {
    const renderedComponent = shallow(<Button title="Primary" variant="primary-default" />);
    expect(renderedComponent).toMatchSnapshot();
  });
  it("Should render button without text (FAB) without crashing", () => {
    const renderedComponent = shallow(<Button icon={IconDefault} iconPosition="left" variant="primary-default" />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
