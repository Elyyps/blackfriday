import React from "react";
import { shallow } from "enzyme";
import { BannerComponent } from "./banner.component";

// Dummy data
import { bannerProps } from "@app/api/core/banner";

describe("[Banner]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <BannerComponent
        buttonLink={bannerProps.buttonLink}
        buttonTitle={bannerProps.buttonTitle}
        image={bannerProps.image}
        label={bannerProps.label}
        logo={bannerProps.logo}
        text={bannerProps.text}
        title={bannerProps.title}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
