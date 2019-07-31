import React from "react";
import { shallow } from "enzyme";
import { BlogBodyTextComponent } from "./blog-body-text.component";
import { generateBlogBodyTextData } from "@app/api/core/blog-bodytext/endpoint";

describe("[BlogBodyText]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<BlogBodyTextComponent blogBodyTextModule={generateBlogBodyTextData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
