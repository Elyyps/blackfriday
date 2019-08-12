import React from "react";
import { shallow } from "enzyme";
import { LanguageSwitchComponent } from "./language-switch.component";

describe("[LanguageSwitch]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <LanguageSwitchComponent currentLocale="nl" onLanguageSwitch={() => jest.fn()} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
