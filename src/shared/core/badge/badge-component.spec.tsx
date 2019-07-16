import React from "react";
import { shallow } from "enzyme";
import { Badge } from "./badge.component";
import ShareSVG from "@assets/icons/share.svg";
describe("[Badge]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<Badge position={"right"} icon={ShareSVG} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
