import React from "react";
import { shallow } from "enzyme";
import { BlogSingleHeaderComponent } from "./blog-single-header.component";
import { generateBlogSingleHeaderData } from "@app/api/modules/blog-single-header/endpoint";
const data = generateBlogSingleHeaderData();
describe("[BlogSingleHeader]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<BlogSingleHeaderComponent blogSingleHeader={data} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
