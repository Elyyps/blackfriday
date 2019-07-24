import React from "react";
import { shallow } from "enzyme";
import { TabComponent } from "./tab.component";
const titles: string[] = ["Winkels", "Productdeals"];

describe("[tabComponent]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<TabComponent titles={titles} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
