import React from "react";
import { DiscountCardComponent } from "./discount-card.component";
import CoolBlue from "@assets/cool-blue.svg";
import { shallowWithIntl } from "enzyme-react-intl";

describe("[DiscountCard]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallowWithIntl(
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
