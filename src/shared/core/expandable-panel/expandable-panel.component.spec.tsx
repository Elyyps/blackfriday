import React from "react";
import { shallow } from "enzyme";
import { ExpandablePanelComponent } from "./expandable-panel.component";

describe("[ExpandablePanelComponent]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <ExpandablePanelComponent mainContent={<span>Title</span>} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
