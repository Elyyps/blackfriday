import React from "react";
import { shallow } from "enzyme";
import { HeaderContentComponent } from "./header-content.component";

describe("[HeaderContent]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <HeaderContentComponent
        title="Black Friday Winkels"
        subtitle="Deelnemende winkels van 2019"
        text="Bodytext voor extra informatie wanneer nodig"
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
