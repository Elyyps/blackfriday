import React from "react";
import { shallow } from "enzyme";
import { BodytextComponent } from "./bodytext.component";
import { generateBodytextDummyData } from "@app/api/core/bodytext.tsx";

describe("[Bodytext]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<BodytextComponent> {generateBodytextDummyData()}</BodytextComponent>);
    expect(renderedComponent).toMatchSnapshot();
  });
});
