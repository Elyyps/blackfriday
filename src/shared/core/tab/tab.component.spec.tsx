import React from "react";
import { shallow } from "enzyme";
import { TabComponent } from "./tab.component";

const data: any[] = [{ title: "Winkels", href: "/" }, { title: "Productdeals", href: "/" }];

describe("[tabComponent]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<TabComponent tabs={data} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
