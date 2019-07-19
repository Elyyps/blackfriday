import React from "react";
import { shallow } from "enzyme";
import { BannerModuleComponent } from "./banner-module.component";

// Dummy data
import { bannerProps } from "@app/api/core/banner";

describe("[BannerModule]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<BannerModuleComponent bannerProps={bannerProps} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
