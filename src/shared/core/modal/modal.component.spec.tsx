import React from "react";
import { shallow } from "enzyme";
import { ModalComponent } from "./modal.component";

describe("[Modal]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <ModalComponent modalTarget="" modalTitle="modalTitle">
        Modal Content
      </ModalComponent>
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
