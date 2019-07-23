import React from "react";
import { shallow } from "enzyme";
import { BannerComponent } from "./banner.component";

// Dummy data
import { generateDummyBannerModule } from "@app/api/modules/banner/generate-dummy-data";

describe("[Banner]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<BannerComponent bannerModule={generateDummyBannerModule()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
