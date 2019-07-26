import React from "react";
import { shallow } from "enzyme";
import { generateCtaSmallModule } from "@app/api/modules/cta-small/generate-dummy-data";
import { CtaSmallModuleComponent } from "./cta-small.component";

describe("[CtaSmallModuleComponent]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<CtaSmallModuleComponent ctaSmallModule={generateCtaSmallModule()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
