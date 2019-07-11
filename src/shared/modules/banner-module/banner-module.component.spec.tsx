import React from "react";
import { shallow } from "enzyme";
import { BannerModuleComponent } from "./banner-module.component";

// Dummy data
import { bannerProps } from "@app/api/core/banner";

const paddingBottom = "72px";
const paddingTop = paddingBottom;

describe("[BannerModule]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <BannerModuleComponent
        bgcolor="#eee"
        paddingBottom={paddingBottom}
        paddingTop={paddingTop}
        bannerProps={bannerProps}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
