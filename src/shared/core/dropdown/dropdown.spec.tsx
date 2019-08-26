import React from "react";
import { shallow } from "enzyme";
import { DropdownComponent } from "./dropdown.component";
import { ShareSocialComponent } from "@app/core/share-social";
import { generateShareSocialModule } from "@app/api/core/share-social/endpoints";

describe("[Dropdown]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <DropdownComponent buttonColor="outline" buttonVariant="primary-brand">
        <ShareSocialComponent {...generateShareSocialModule()} />
      </DropdownComponent>
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
