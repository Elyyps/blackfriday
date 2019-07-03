import React from "react";
import { shallow } from "enzyme";
import { MediumHeroComponent } from "./medium-hero.component";

describe("[MediumHero]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<MediumHeroComponent />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
