
import React from "react";
import { shallow } from "enzyme";
import { BlogBodyTextComponent } from "./blog-body-text.component";

describe("[BlogBodyText]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <BlogBodyTextComponent />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});

  