import React from "react";
import { shallow } from "enzyme";

import { DropdownComponent } from "./dropdown.component";
import { ShareSocialComponent } from "@app/core/share-social";

import { generateShareSocialModule } from "@app/api/modules/share-social/endpoints";
describe("[Dropdown]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <DropdownComponent>
        <ShareSocialComponent {...generateShareSocialModule()} />
      </DropdownComponent>
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
