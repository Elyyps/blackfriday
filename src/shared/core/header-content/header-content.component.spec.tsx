import React from "react";
import { shallow } from "enzyme";
import { HeaderContentComponent } from "./header-content.component";
import { headerContent } from "@app/api/core/header-content";

describe("[HeaderContent]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <HeaderContentComponent
        title={headerContent.title}
        subtitle={headerContent.subtitle}
        text={headerContent.text}
        breadcrumbProps={headerContent.breadcrumbProps}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
