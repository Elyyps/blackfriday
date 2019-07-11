import React from "react";
import { shallow } from "enzyme";
import { HeaderInfoComponent } from "../header-info";

import { getHeaderInfoDummyData } from "@app/api/modules/header-info/endpoints";

describe("[Footer]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<HeaderInfoComponent headerInfo={getHeaderInfoDummyData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
