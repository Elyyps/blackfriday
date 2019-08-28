import React from "react";
import { shallow } from "enzyme";
import { FeaturedBlogItemsComponent } from "./featured-blog-items.component";
import { generate2BlogPostsDataBelgian } from "@app/api/core/blog-post/endpoint";
const item = generate2BlogPostsDataBelgian();
describe("[FeaturedBlogItems]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<FeaturedBlogItemsComponent item={item[0]} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
