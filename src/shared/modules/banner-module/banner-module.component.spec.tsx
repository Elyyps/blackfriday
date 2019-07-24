import React from "react";
import { shallow } from "enzyme";
import { BannerModuleComponent } from "./banner-module.component";

// Dummy data
import { generateDummyBannerModule } from "@app/api/modules/banner/generate-dummy-data";

describe("[BannerModule]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<BannerModuleComponent bannerModule={generateDummyBannerModule()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
