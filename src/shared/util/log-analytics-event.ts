import ReactGA from "react-ga";

export const logEvent = (category: string, action: string) => {
  ReactGA.event({
    category,
    action
  });
};
