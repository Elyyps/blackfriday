import React from "react";
import { shallow } from "enzyme";
import { BreadcrumbComponent } from "./breadcrumb.component";

// Dummy data
import { breadcrumbItems } from "@app/api/core/breadcrumb";

describe("[Breadcrumb]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <BreadcrumbComponent links={breadcrumbItems.links} backButton={breadcrumbItems.backButton} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
