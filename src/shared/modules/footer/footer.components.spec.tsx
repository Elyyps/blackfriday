import React from "react";
import { shallow } from "enzyme";
import { FooterComponent } from "./footer.component";
import { getFullfooter } from "@app/api/modules/footer/endpoints";
const numberStar = 5;
const rating = 1;
describe("[Footer]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<FooterComponent footerModule={getFullfooter()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
