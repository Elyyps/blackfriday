import React from "react";
import { shallow } from "enzyme";
import { FooterComponent } from "./footer.component";
import { generateFooterDataBelgian } from "@app/api/modules/footer/endpoints";
describe("[Footer]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<FooterComponent footerModule={generateFooterDataBelgian()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
