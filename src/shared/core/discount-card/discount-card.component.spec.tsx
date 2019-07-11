import React from "react";
import { shallow } from "enzyme";
import { DiscountCardComponent } from "./discount-card.component";
import CoolBlue from "@assets/cool-blue.svg";

describe("[DiscountCard]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <DiscountCardComponent
        content="Content"
        range={1}
        status="status"
        title="Title"
        image={CoolBlue}
        coupon="COUPON"
        buttonLink="/"
        buttonText=""
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
