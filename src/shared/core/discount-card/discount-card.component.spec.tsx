
import React from "react";
import { shallow } from "enzyme";
import { DiscountCardComponent } from "./discount-card.component";

describe("[DiscountCard]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <DiscountCardComponent />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});

  