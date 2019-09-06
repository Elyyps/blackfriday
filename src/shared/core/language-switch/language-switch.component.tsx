import * as React from "react";
import styles from "./language-switch-component.module.scss";
import { ILanguageSwitchContainerProps } from "./language-switch.container";
import { LOCALES } from "@app/constants";
import { InjectedIntlProps, injectIntl } from "react-intl";
import { IBlackFridayRootURL } from "@app/stores/settings";

export interface ILanguageSwitchComponentProps {}

const component = (props: ILanguageSwitchContainerProps & InjectedIntlProps) => (
  <React.Fragment>
    {((props.blackFridayRootUrl as IBlackFridayRootURL).rootUrl as string).includes(".be") && (
      <div className={styles["menu-language-switch"]}>
        <span
          role="button"
          onClick={() => {
            props.onLanguageSwitch(LOCALES.NL);
          }}
          className={props.currentLocale === LOCALES.NL ? styles["menu-language-switch-option"] : ""}
        >
          Nederlands
        </span>
        <div>/</div>
        <span
          role="button"
          onClick={() => {
            props.onLanguageSwitch(LOCALES.FR);
          }}
          className={props.currentLocale === LOCALES.FR ? styles["menu-language-switch-option"] : ""}
        >
          Français
        </span>
      </div>
    )}
  </React.Fragment>
);
const LanguageSwitchComponent = injectIntl(component);
export { LanguageSwitchComponent };
