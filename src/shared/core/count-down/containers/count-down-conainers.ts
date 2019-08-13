import { connect, MapStateToProps } from "react-redux";

import { IAppState } from "@app/stores";
import { IBlackFridayDate } from "@app/stores/settings";
import { CountDownComponent, ICountDownComponentProps } from "../components/count-down.component";

interface IStateProps {
  blackFridayDate: IBlackFridayDate | undefined;
}

const mapStateToProps: MapStateToProps<IStateProps, ICountDownComponentProps, IAppState> = state => {
  const blackFridayDate = state.settings.blackFridayDate;

  return { blackFridayDate };
};

export type CountDownContainerProps = IStateProps;
export const CountDownContainer = connect(mapStateToProps)(CountDownComponent);
