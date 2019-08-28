import React from "react";
import { shallow } from "enzyme";
import { BlogOverviewHeaderComponent } from "./blog-overview-header.component";
import { generateBlogOverviewHeaderDataBelgian } from "@app/api/modules/blog-overview-header/endpoint";

describe("[BlogSingleHeader]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <BlogOverviewHeaderComponent blogOverviewHeader={generateBlogOverviewHeaderDataBelgian()} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
