import React from "react";
import { shallow } from "enzyme";
import { PageProgressBarComponent } from "./page-progress-bar.component";

describe("[PageProgressBar]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<PageProgressBarComponent totalHeight={0} mainDivRef={jest.fn()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
