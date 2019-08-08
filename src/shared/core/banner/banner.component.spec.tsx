import React from "react";
import { BannerComponent } from "./banner.component";
import { shallowWithIntl } from "enzyme-react-intl";

// Dummy data
import { generateDummyBannerComponentData } from "@app/api/core/banner/generate-dummy-data";

describe("[Banner]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallowWithIntl(<BannerComponent {...generateDummyBannerComponentData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
