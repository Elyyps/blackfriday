import React from "react";
import { shallow } from "enzyme";
import { SidebarComponent } from "./sidebar.component";
import { generateSidebarData } from "@app/api/core/sidebar/generate-dummy-data";

describe("[Sidebar]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<SidebarComponent {...generateSidebarData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
