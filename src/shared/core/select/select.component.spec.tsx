import React from "react";
import { shallow } from "enzyme";
import { SelectComponent } from "./select.component";
const options = ["newest", "price", "relevance"];
describe("[Select]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<SelectComponent options={options} onSelect={() => ""} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
