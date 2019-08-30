import React from "react";
import { shallow } from "enzyme";
import { BlogPostComponent } from "./blog-post.component";
import { generateBlogPostDataBelgian } from "@app/api/core/blog-post/endpoint";
const posts = generateBlogPostDataBelgian();

describe("[BlogPost]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<BlogPostComponent posts={posts[1]} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
