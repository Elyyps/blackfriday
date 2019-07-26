import React from "react";
import { shallow } from "enzyme";
import { SearchInputFieldComponent } from "./search-input-field.component";

describe("[SearchInputField]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<SearchInputFieldComponent />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
