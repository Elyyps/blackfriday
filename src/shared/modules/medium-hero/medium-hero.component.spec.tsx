import React from "react";
import { shallow } from "enzyme";
import { MediumHeroComponent } from "./medium-hero.component";

// Dummy Data
import { generateMediumHeroDummyDataBelgian } from "@app/api/modules/medium-hero/generate-dummy-data";

describe("[MediumHero]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<MediumHeroComponent mediumHeroModule={generateMediumHeroDummyDataBelgian()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
