import React from "react";
import { shallow } from "enzyme";
import { MediumHeroComponent } from "./medium-hero.component";

// Dummy Data
import { headerContent } from "@app/api/core/header-content";
import Oasis from "@assets/oasis.jpg";
import { uniqueSellingPoints } from "@app/api/core/usp";

describe("[MediumHero]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <MediumHeroComponent headerContent={headerContent} image={Oasis} usps={uniqueSellingPoints} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
