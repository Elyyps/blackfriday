import React from "react";
import { shallow } from "enzyme";
import { NotFoundComponent } from "./not-found.component";
import { generateNotFoundModuleDummyData } from "@app/api/modules/not-found/endpoints";
const data = generateNotFoundModuleDummyData();
describe("[NotFound]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<NotFoundComponent notFoundModule={data} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
