import * as React from "react";
import styles from "./language-switch-component.module.scss";
import { ResourceTextComponent } from "../resource-text";
import { ILanguageSwitchContainerProps } from "./language-switch.container";
import { LOCALES } from "@app/constants";

export interface ILanguageSwitchComponentProps {}
const switchLanguage = (props: ILanguageSwitchContainerProps) => {
  const newLocale = props.currentLocale === LOCALES.NL ? LOCALES.EN : LOCALES.NL;

  props.onLanguageSwitch(newLocale);
};
const LanguageSwitchComponent = (props: ILanguageSwitchContainerProps) => (
  <a
    role="button"
    aria-label="languageSwitchButton"
    onClick={() => {
      switchLanguage(props);
    }}
    className={styles["language-switch"]}
  >
    <img src={require("@assets/language.svg")} alt="image" />
    <span>
      {props.currentLocale === LOCALES.NL ? (
        <ResourceTextComponent resourceKey="language-switch_en" />
      ) : (
        <ResourceTextComponent resourceKey="language-switch_nl" />
      )}
    </span>
  </a>
);

export { LanguageSwitchComponent };
