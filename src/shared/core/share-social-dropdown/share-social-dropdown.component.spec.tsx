
import React from "react";
import { shallow } from "enzyme";
import { ShareSocialDropdownComponent } from "./share-social-dropdown.component";

describe("[ShareSocialDropdown]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <ShareSocialDropdownComponent />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});

  