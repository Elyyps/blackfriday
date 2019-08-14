import React from "react";
import { LanguageSwitchComponent } from "./language-switch.component";
import { shallowWithIntl } from "enzyme-react-intl";

describe("[LanguageSwitch]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallowWithIntl(
      <LanguageSwitchComponent currentLocale="nl" onLanguageSwitch={() => jest.fn()} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
