import React from "react";
import { shallow } from "enzyme";
import { ModalComponent } from "./modal.component";
import { Button } from "..";

describe("[Modal]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <ModalComponent trigger={<Button title={"test"} />} variant={"small"}>
        <p>test</p>
      </ModalComponent>
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
