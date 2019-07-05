import React from "react";
import { shallow } from "enzyme";
import { SmallHeaderComponent } from "./small-header.component";
import { headerContent } from "@app/api/core/header-content";

describe("[SmallHeader]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<SmallHeaderComponent headerContent={headerContent} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
