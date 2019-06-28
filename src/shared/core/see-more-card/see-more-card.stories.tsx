import React from "react";
import { shallow } from "enzyme";
import { SeeMoreCardComponent } from "./see-more-card.component";

describe("[SeeMoreCard]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <SeeMoreCardComponent
        title="Wij hebben meer winkels in ons overzicht"
        link={{ title: "Alle winkels", url: "/" }}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
