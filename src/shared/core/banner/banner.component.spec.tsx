import React from "react";
import { shallow } from "enzyme";
import { BannerComponent } from "./banner.component";

// Dummy data
import { generateDummyBannerComponentData } from "@app/api/core/banner/generate-dummy-data";

describe("[Banner]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<BannerComponent {...generateDummyBannerComponentData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
