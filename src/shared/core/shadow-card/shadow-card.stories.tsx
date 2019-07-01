import React from "react";
import { shallow } from "enzyme";
import { ShadowCardComponent } from "./shadow-card.component";

const topCssPixelString = "24px";
const sideCssPixelString = "16px";

describe("[ShadowCard]", () => {
  it("Should render component without crashing (only shadow defined)", () => {
    const renderedComponent = shallow(
      <ShadowCardComponent shadowSize="small">
        <div>Content</div>
      </ShadowCardComponent>
    );
    expect(renderedComponent).toMatchSnapshot();
  });
  it("Should render component without crashing (only shadow defined) with more content", () => {
    const renderedComponent = shallow(
      <ShadowCardComponent shadowSize="small">
        <div>
          <span>Content 1</span>
          <div>
            <span>Content 2</span>
            <div>
              <span>Content 3</span>
            </div>
          </div>
        </div>
      </ShadowCardComponent>
    );
    expect(renderedComponent).toMatchSnapshot();
  });
  it("Should render component without crashing (with padding and radius)", () => {
    const renderedComponent = shallow(
      <ShadowCardComponent
        shadowSize="medium"
        borderRadius={[topCssPixelString, sideCssPixelString, topCssPixelString, sideCssPixelString]}
        padding={[topCssPixelString, sideCssPixelString]}
      >
        <div>Content</div>
      </ShadowCardComponent>
    );
    expect(renderedComponent).toMatchSnapshot();
  });
  it("Should render component without crashing (with only 1 padding and 1 radius)", () => {
    const renderedComponent = shallow(
      <ShadowCardComponent shadowSize="medium" borderRadius={[topCssPixelString]} padding={[topCssPixelString]}>
        <div>Content</div>
      </ShadowCardComponent>
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
