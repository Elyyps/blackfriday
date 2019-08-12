import React from "react";
import { HeaderInfoComponent } from "../header-info";
import { shallowWithIntl } from "enzyme-react-intl";
import { getHeaderInfoDummyData } from "@app/api/modules/header-info/endpoints";

describe("[Footer]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallowWithIntl(<HeaderInfoComponent headerInfo={getHeaderInfoDummyData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
