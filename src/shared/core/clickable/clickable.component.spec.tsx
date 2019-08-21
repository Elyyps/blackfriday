import React from "react";
import { shallow } from "enzyme";
import { ClickableComponent } from "./clickable.component";
import IconDefault from "@assets/icons/chevron-right.svg";

describe("[Clickable]", () => {
  it("Should render component as button without crashing", () => {
    const renderedComponent = shallow(
      <ClickableComponent
        title="test"
        iconRight={IconDefault}
        iconStyle="outline-fill"
        variant={"primary-brand"}
        onClick={() => alert(`clicked button 2: 1`)}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
  it("Should render component as link without crashing (with animation and https link)", () => {
    const renderedComponent = shallow(
      <ClickableComponent
        title="test"
        iconRight={IconDefault}
        iconStyle="outline-fill"
        variant={"primary-brand"}
        href="https://www.youtube.com"
        fullWidth
        animated
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
  it("Should render component as link without crashing (with http link)", () => {
    const renderedComponent = shallow(
      <ClickableComponent
        title="test"
        iconRight={IconDefault}
        iconStyle="outline-fill"
        variant={"link-primary"}
        href="http://www.youtube.com"
        fullWidth
        animated
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
  it("Should render component as link without crashing (internal link)", () => {
    const renderedComponent = shallow(
      <ClickableComponent
        title="test"
        iconRight={IconDefault}
        iconStyle="outline-fill"
        variant={"link-primary"}
        href="/#hailtomfrontendking"
        fullWidth
        animated
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
