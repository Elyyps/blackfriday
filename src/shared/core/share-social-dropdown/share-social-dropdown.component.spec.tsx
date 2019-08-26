import React from "react";
import { shallow } from "enzyme";
import { ShareSocialDropdownComponent } from "./share-social-dropdown.component";
import { socialMediaButtons } from "@app/api/core/share-social/generate-dummy-data";

describe("[ShareSocialDropdown]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <ShareSocialDropdownComponent buttonTitle="Share" shareSocial={socialMediaButtons} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
