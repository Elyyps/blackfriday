import React from "react";
import { LanguageSwitchComponent } from "./language-switch.component";
import { shallowWithIntl } from "enzyme-react-intl";
import { IBlackFridayRootURL } from "@app/stores/settings";

describe("[LanguageSwitch]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallowWithIntl(
      <LanguageSwitchComponent
        currentLocale="nl"
        onLanguageSwitch={() => jest.fn()}
        blackFridayRootUrl={{ rootUrl: "be" } as IBlackFridayRootURL}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
