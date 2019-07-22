import React from "react";
import { shallow } from "enzyme";

import CardIcon from "@assets/icons/store.svg";
import { ArrowPanelComponent } from "./arrow-panel.component";

describe("[arrow-panel]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<ArrowPanelComponent title="Productdeals" icon={CardIcon} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
