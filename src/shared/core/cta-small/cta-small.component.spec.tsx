import React from "react";
import { shallow } from "enzyme";
import { CtaSmallComponent } from "./cta-small.component";
import { generateCtaSmallModule } from "@app/api/modules/cta-small/generate-dummy-data";

describe("[CtaSmall]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<CtaSmallComponent {...generateCtaSmallModule()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
