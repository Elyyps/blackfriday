
import React from "react";
import { shallow } from "enzyme";
import { KeywordTagComponent } from "./keyword-tag.component";

describe("[KeywordTag]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <KeywordTagComponent />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});

  