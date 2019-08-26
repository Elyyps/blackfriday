import React from "react";
import { shallow } from "enzyme";
import { FeaturedBlogComponent } from "./featured-blog.component";
import { generateFeaturedBlogData } from "@app/api/modules/featured-blog/endpoint";
const data = generateFeaturedBlogData();
describe("[FeaturedBlog]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<FeaturedBlogComponent featuredBlog={data} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
