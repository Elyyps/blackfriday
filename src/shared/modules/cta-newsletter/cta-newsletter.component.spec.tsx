import React from "react";
import { shallow } from "enzyme";
import { generateCtaNewsLetterModule } from "@app/api/modules/cta-newsletter/generate-dummy-data";
import { CtaNewsletterComponent } from "./cta-newsletter.component";

describe("[CtaSmallModuleComponent]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<CtaNewsletterComponent ctaNewsLetterModule={generateCtaNewsLetterModule()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
