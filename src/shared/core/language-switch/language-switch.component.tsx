import * as React from "react";
import styles from "./language-switch-component.module.scss";
import { ILanguageSwitchContainerProps } from "./language-switch.container";
import { LOCALES } from "@app/constants";
import { InjectedIntlProps, injectIntl } from "react-intl";

export interface ILanguageSwitchComponentProps {}

const component = (props: ILanguageSwitchContainerProps & InjectedIntlProps) => (
  <div className={styles["menu-language-switch"]}>
    <span
      role="button"
      onClick={() => {
        props.onLanguageSwitch(LOCALES.NL);
      }}
      style={props.currentLocale === LOCALES.NL ? { color: "#e10a14" } : { color: "white" }}
    >
      {props.intl.formatMessage({ id: "menu-language-switch_nl" })}
    </span>
    <div>/</div>
    <span
      role="button"
      onClick={() => {
        props.onLanguageSwitch(LOCALES.FR);
      }}
      style={props.currentLocale === LOCALES.FR ? { color: "#e10a14" } : { color: "white" }}
    >
      {props.intl.formatMessage({ id: "menu-language-switch_fr" })}
    </span>
  </div>
);
const LanguageSwitchComponent = injectIntl(component);
export { LanguageSwitchComponent };
