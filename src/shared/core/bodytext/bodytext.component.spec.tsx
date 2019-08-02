import React from "react";
import { shallow } from "enzyme";
import { BodyTextComponent } from "./bodytext.component";
import { generateBodytextDummyData } from "@app/api/core/bodytext";

describe("[BodyText]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<BodyTextComponent bodyTextModule={generateBodytextDummyData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
