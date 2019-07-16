
import React from "react";
import { shallow } from "enzyme";
import { NewsletterComponent } from "./newsletter.component";

describe("[Newsletter]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <NewsletterComponent />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});

  