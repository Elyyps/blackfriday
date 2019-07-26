import React from "react";
import { shallow } from "enzyme";

import CardIcon from "@assets/icons/store.svg";
import { ArrowPanel } from "./arrow-panel.component";

describe("[arrow-panel]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<ArrowPanel image={CardIcon} link={{ title: "Productdeals", url: "/" }} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
