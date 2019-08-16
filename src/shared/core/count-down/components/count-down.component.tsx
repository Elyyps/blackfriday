import * as React from "react";

import { CountDownContainerProps } from "../containers/count-down-containers";
import { IBlackFridayDate } from "@app/stores/settings";
import { InjectedIntlProps, injectIntl } from "react-intl";

export interface ICountDownComponentProps {
  isFullVersion?: boolean;
}
const MILLISECONDS = 1000;
const SECONDS = 60;
const MINUTE = 60;
const HOURS = 24;
const MONTHS = 24;
const component = (props: ICountDownComponentProps & CountDownContainerProps & InjectedIntlProps) => {
  const [date, setDate] = React.useState("");
  let timerID: any;
  const currentDay = new Date();
  const blackFridayDay = new Date(
    (props.blackFridayDate as IBlackFridayDate).year,
    (props.blackFridayDate as IBlackFridayDate).month,
    (props.blackFridayDate as IBlackFridayDate).day
  );
  const countDownDate = blackFridayDay.getTime();
  const months =
    (blackFridayDay.getFullYear() - currentDay.getFullYear()) * MONTHS +
    blackFridayDay.getMonth() -
    currentDay.getMonth();

  const tick = () => {
    const now = currentDay.getTime();
    const distance = countDownDate - now;
    const hours = Math.floor(
      (distance % (MILLISECONDS * SECONDS * MINUTE * HOURS)) / (MILLISECONDS * SECONDS * MINUTE)
    );
    const minutes = Math.floor((distance % (MILLISECONDS * SECONDS * MINUTE)) / (MILLISECONDS * SECONDS));
    const seconds = Math.floor((distance % (MILLISECONDS * SECONDS)) / MILLISECONDS);

    setDate(`${hours} h ${minutes} m  ${seconds} s`);

    if (distance < 0) {
      clearInterval(timerID);
      setDate(props.intl.formatMessage({ id: "count-down-blackfriday" }));
    }
  };

  React.useEffect(() => {
    const daysLeftWithinBlackFridayMonth = blackFridayDay.getDate() - currentDay.getDate();
    if (months >= 1) {
      if (daysLeftWithinBlackFridayMonth > 0) {
        setDate(`${months} month  ${props.isFullVersion ? `& ${daysLeftWithinBlackFridayMonth} days` : ""}`);
      } else if (blackFridayDay.getDate() === currentDay.getDate()) {
        setDate(`${months} month `);
      } else {
        const dayTillEndOfMonth =
          new Date(currentDay.getFullYear(), currentDay.getMonth(), 0).getDate() -
          currentDay.getDate() +
          blackFridayDay.getDate();
        setDate(
          ` ${months > 1 ? `${months - 1} months` : ""} ${props.isFullVersion ? `& ${dayTillEndOfMonth} days` : ""}`
        );
      }
    } else if (daysLeftWithinBlackFridayMonth > 1) {
      setDate(`${daysLeftWithinBlackFridayMonth} days`);
    } else {
      timerID = setInterval(tick, MILLISECONDS);
    }

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return <React.Fragment>{date}</React.Fragment>;
};
const CountDownComponent = injectIntl(component);
export { CountDownComponent };
