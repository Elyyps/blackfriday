import React from "react";
import { shallow } from "enzyme";
import { ShadowCardComponent } from "./shadow-card.component";

const topNumber = 24;
const sideNumber = 16;

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
        borderRadius={[topNumber, sideNumber, topNumber, sideNumber]}
        padding={[topNumber, sideNumber]}
      >
        <div>Content</div>
      </ShadowCardComponent>
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
