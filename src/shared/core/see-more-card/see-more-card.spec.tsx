import React from "react";
import { SeeMoreCardComponent } from "./see-more-card.component";
import { shallow } from "enzyme";

describe("[SeeMoreCard]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <SeeMoreCardComponent
        icon="https://d2ddoduugvun08.cloudfront.net/items/2c3217062N3d2L320w0U/Image%202019-06-27%20at%203.17.28%20PM.png?X-CloudApp-Visitor-Id=3342233&v=03808fb0"
        title="Wij hebben meer winkels in ons overzicht"
        buttonLink="/"
        buttonText="Alle winkels"
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
