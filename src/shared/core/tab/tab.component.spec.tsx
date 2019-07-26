import React from "react";
import { shallow } from "enzyme";
import { TabComponent, ITabsInterface } from "./tab.component";
import { StoresOverviewContainer } from "@app/modules/stores-overview/container/stores-overview.container";
const data: ITabsInterface[] = [
  { title: "Winkels", content: <StoresOverviewContainer />, index: 1 },
  { title: "Productdeals", content: <h1>Will be implemented</h1>, index: 2 }
];
describe("[tabComponent]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<TabComponent tabs={data} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
