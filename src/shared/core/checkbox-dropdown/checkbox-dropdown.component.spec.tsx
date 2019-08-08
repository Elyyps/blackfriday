import React from "react";
import { shallow } from "enzyme";

import { CheckboxDropdown } from "@app/core/checkbox-dropdown/checkbox-dropdown.component";

describe("[CheckboxDropdown]", () => {
  it("should render without crashing", () => {
    const renderedComponent = shallow(<CheckboxDropdown items={[]} onChange={jest.fn()} title="" />);

    expect(renderedComponent).toMatchSnapshot();
  });
});
