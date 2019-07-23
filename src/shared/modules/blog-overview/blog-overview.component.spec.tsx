import React from "react";
import { shallow } from "enzyme";
import { generateBlogPostData } from "@app/api/core/blog-post/endpoint";
import { BlogOverviewComponent } from "./blog-overview.component";
const posts = generateBlogPostData();
describe("[BlogOverview]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<BlogOverviewComponent posts={posts} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
