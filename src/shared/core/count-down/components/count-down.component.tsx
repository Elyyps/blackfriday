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
const MONTHS = 12;
const roundMonthFrom = 10;
const component = (props: ICountDownComponentProps & CountDownContainerProps & InjectedIntlProps) => {
  const [date, setDate] = React.useState("...");
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
    const now = new Date().getTime();
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
        setDate(
          `${
            !props.isFullVersion && daysLeftWithinBlackFridayMonth > roundMonthFrom
              ? props.intl.formatMessage({ id: "more-then-month" })
              : ""
          } ${months}  ${
            months > 1 ? props.intl.formatMessage({ id: "months" }) : props.intl.formatMessage({ id: "month" })
          } ${
            props.isFullVersion
              ? `& ${daysLeftWithinBlackFridayMonth} ${
                  daysLeftWithinBlackFridayMonth > 1
                    ? props.intl.formatMessage({ id: "days" })
                    : props.intl.formatMessage({ id: "day" })
                }`
              : ""
          }`
        );
      } else if (blackFridayDay.getDate() === currentDay.getDate()) {
        setDate(
          `${months} ${
            months > 1 ? props.intl.formatMessage({ id: "months" }) : props.intl.formatMessage({ id: "month" })
          } `
        );
      } else {
        const daysLeftToBlackFriday =
          new Date(currentDay.getFullYear(), currentDay.getMonth(), 0).getDate() -
          currentDay.getDate() +
          blackFridayDay.getDate();

        setDate(
          ` ${
            months > 1
              ? `${
                  !props.isFullVersion && daysLeftToBlackFriday > roundMonthFrom
                    ? props.intl.formatMessage({ id: "more-then-month" })
                    : ""
                } ${months - 1} ${
                  months - 1 > 1
                    ? props.intl.formatMessage({ id: "months" })
                    : props.intl.formatMessage({ id: "month" })
                }`
              : ""
          } ${
            props.isFullVersion
              ? `& ${daysLeftToBlackFriday} ${
                  daysLeftToBlackFriday > 1
                    ? props.intl.formatMessage({ id: "days" })
                    : props.intl.formatMessage({ id: "day" })
                }`
              : ""
          }`
        );
      }
    } else if (daysLeftWithinBlackFridayMonth >= 1) {
      setDate(
        `${daysLeftWithinBlackFridayMonth} ${
          daysLeftWithinBlackFridayMonth > 1
            ? props.intl.formatMessage({ id: "days" })
            : props.intl.formatMessage({ id: "day" })
        }`
      );
    } else {
      timerID = setInterval(tick, MILLISECONDS);
    }

    return () => {
      clearInterval(timerID);
    };
  }, [props.intl]);

  return <React.Fragment>{date}</React.Fragment>;
};
const CountDownComponent = injectIntl(component);
export { CountDownComponent };
