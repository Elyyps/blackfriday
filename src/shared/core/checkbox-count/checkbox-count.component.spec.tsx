import React from "react";
import { shallow } from "enzyme";

import { CheckboxCount } from "@app/core/checkbox-count/checkbox-count.component";

describe("[CheckboxCount]", () => {
  it("should render non selected without crashing", () => {
    const renderedComponent = shallow(
      <CheckboxCount
        item={{
          displayName: "",
          id: "1",
          isSelected: false,
          totalAmount: 22
        }}
        onChecked={jest.fn()}
      />
    );

    expect(renderedComponent).toMatchSnapshot();
  });

  it("should render selected without crashing", () => {
    const renderedComponent = shallow(
      <CheckboxCount
        item={{
          displayName: "",
          id: "1",
          isSelected: true,
          totalAmount: 22
        }}
        onChecked={jest.fn()}
      />
    );

    expect(renderedComponent).toMatchSnapshot();
  });
});
