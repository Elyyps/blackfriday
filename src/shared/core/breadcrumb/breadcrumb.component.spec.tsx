import React from "react";
import { shallow } from "enzyme";
import { BreadcrumbComponent, IBreadcrumbComponentProps } from "./breadcrumb.component";

const breadcrumbItems: IBreadcrumbComponentProps = {
  links: [{ title: "Home", url: "#/" }, { title: "Blogs", url: "#/" }],
  backButton: { text: "Alle blogs", url: "/#" }
};

describe("[Breadcrumb]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <BreadcrumbComponent links={breadcrumbItems.links} backButton={breadcrumbItems.backButton} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
