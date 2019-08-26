import React from "react";
import { shallow } from "enzyme";
import { NewsletterComponent } from "./newsletter.component";
import { generateDummyNewsletterModule } from "@app/api/modules/newsletter/generate-dummy-data";

describe("[Newsletter]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<NewsletterComponent newsletterModule={generateDummyNewsletterModule()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
