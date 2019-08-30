import React from "react";
import { shallow } from "enzyme";
import { BlogOverviewComponent } from "./blog-overview.component";
import { generateBlogOverviewDataBelgian } from "@app/api/modules/blog-overview/endpoint";
const blog = generateBlogOverviewDataBelgian();
describe("[BlogOverview]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<BlogOverviewComponent blog={blog} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
