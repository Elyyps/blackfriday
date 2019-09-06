import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { LanguageSwitchComponent } from "./language-switch.component";
import { IAppState } from "@app/stores";
import { localesActions } from "@app/stores/locales";
import { IBlackFridayRootURL } from "@app/stores/settings";

interface IStateProps {
  blackFridayRootUrl: IBlackFridayRootURL | undefined;
  currentLocale: string;
}
interface IDispatchProps {
  onLanguageSwitch: (locale: string) => void;
}

const mapStateToProps: MapStateToProps<IStateProps, {}, IAppState> = state => {
  const { locale } = state.locales;
  const blackFridayRootUrl = state.settings.blackFridayRootUrl;

  return { currentLocale: locale, blackFridayRootUrl };
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = dispatch => ({
  onLanguageSwitch: (locale: string) => dispatch(localesActions.setLocale({ locale }))
});

export interface ILanguageSwitchContainerProps extends IStateProps, IDispatchProps {}
export const LanguageSwitchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSwitchComponent);
