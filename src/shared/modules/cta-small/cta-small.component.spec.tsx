import React from "react";
import { shallow } from "enzyme";
import { CtaSmallComponent } from "./cta-small.component";
import IconDefault from "@assets/icons/sign.svg";

const buttonClick = () => (location.href = "#");
describe("[CtaSmall]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <CtaSmallComponent
        buttonClick={buttonClick}
        buttonTitle="Naar deals"
        text="Niet helemaal wat je zoekt? Geeft niks want we hebben meer!"
        icon={IconDefault}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  it("should render empty component without crashing", () => {
    const renderedComponent = shallow(<CtaSmallComponent />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
