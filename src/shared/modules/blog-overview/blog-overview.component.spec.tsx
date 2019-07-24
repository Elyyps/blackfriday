import React from "react";
import { shallow } from "enzyme";
import { BlogOverviewComponent } from "./blog-overview.component";
import { generateBlogOverviewData } from "@app/api/modules/blog-overview/endpoint";
const blog = generateBlogOverviewData();
describe("[BlogOverview]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<BlogOverviewComponent blog={blog} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
