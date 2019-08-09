import * as React from "react";
import styles from "./count-down-component.module.scss";
import { CountDownContainerProps } from "../containers/count-down-conainers";
import { IBlackFridayDate } from "@app/stores/settings";

export interface ICountDownComponentProps {}

const CountDownComponent = (props: ICountDownComponentProps & CountDownContainerProps) => {
  const [date, setDate] = React.useState("");

  React.useEffect(() => {
    const now = new Date().getTime();
    const blackFridayDay = new Date(
      (props.blackFridayDate as IBlackFridayDate).year,
      (props.blackFridayDate as IBlackFridayDate).month,
      (props.blackFridayDate as IBlackFridayDate).day
    );
    const countDownDate = blackFridayDay.getTime();
    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const months =
      (blackFridayDay.getFullYear() - new Date().getFullYear()) * 12 +
      blackFridayDay.getMonth() -
      new Date().getMonth();
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const tick = () => {
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setDate(`${hours} h ${minutes} m  ${seconds} s`);
      // Output the result in an element with id="demo"
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(timerID);
        setDate("BLACK FRIDAY");
      }
    };
    let timerID: any;
    console.log(days);
    if (months >= 1) {
      setDate(`${months} months`);
    } else if (days >= 1) {
      setDate(`${days} days`);
    } else {
      timerID = setInterval(tick, 1000);
    }

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return <React.Fragment>{date}</React.Fragment>;
};

export { CountDownComponent };
