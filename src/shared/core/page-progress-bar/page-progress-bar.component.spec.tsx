import React from "react";
import { shallow } from "enzyme";
import { PageProgressBarComponent } from "./page-progress-bar.component";

describe("[PageProgressBar]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<PageProgressBarComponent value={0} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
