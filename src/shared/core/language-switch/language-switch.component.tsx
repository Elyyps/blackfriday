import * as React from "react";
import styles from "./language-switch-component.module.scss";
import { ILanguageSwitchContainerProps } from "./language-switch.container";
import { LOCALES } from "@app/constants";
import { InjectedIntlProps, injectIntl } from "react-intl";

export interface ILanguageSwitchComponentProps {}

const component = (props: ILanguageSwitchContainerProps & InjectedIntlProps) => {
  const [language, setLanguage] = React.useState<string>(props.currentLocale);

  const switchLanguage = (props: ILanguageSwitchContainerProps) => {
    if (language !== props.currentLocale) {
      const newLocale = props.currentLocale === LOCALES.NL ? LOCALES.FR : LOCALES.NL;
      props.onLanguageSwitch(newLocale);
    }
  };

  React.useEffect(() => {
    switchLanguage(props);
  }, [language]);

  return (
    <div className={styles["menu-language-switch"]}>
      <span
        onClick={() => {
          setLanguage(LOCALES.NL);
        }}
        style={language === LOCALES.NL ? { color: "global-link-color" } : {}}
      >
        {props.intl.formatMessage({ id: "menu-language-switch_nl" })}
      </span>
      <div>/</div>
      <span
        onClick={() => {
          setLanguage(LOCALES.FR);
        }}
        style={language === LOCALES.FR ? { color: "global-link-color" } : {}}
      >
        {props.intl.formatMessage({ id: "menu-language-switch_fr" })}
      </span>
    </div>
  );
};
const LanguageSwitchComponent = injectIntl(component);
export { LanguageSwitchComponent };
