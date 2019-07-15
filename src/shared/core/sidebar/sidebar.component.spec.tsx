import React from "react";
import { shallow } from "enzyme";
import { SidebarComponent } from "./sidebar.component";
import { sidebarContent } from "@app/api/core/sidebar";

describe("[Sidebar]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<SidebarComponent {...sidebarContent} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
