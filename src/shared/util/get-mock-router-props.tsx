import { RouteComponentProps } from "react-router";
import { match } from "react-router-dom";
import { UnregisterCallback, Href } from "history";

// This is to mock out the dependencies for react router
/* tslint:disable-next-line */
export function getMockRouterProps<P>() {
  const location = {
    hash: "",
    key: "",
    pathname: "",
    search: "",
    state: {}
  };

  const matchProps: match = {
    isExact: true,
    params: {},
    path: "",
    url: ""
  };

  const props: RouteComponentProps = {
    history: {
      action: "POP",
      block: t => {
        const temp: UnregisterCallback = jest.fn();

        return temp;
      },
      createHref: t => {
        const temp: Href = "";

        return temp;
      },
      go: () => jest.fn(),
      goBack: () => jest.fn(),
      goForward: () => jest.fn(),
      length: 2,
      listen: t => {
        const temp: UnregisterCallback = jest.fn();

        return temp;
      },
      location,
      push: () => jest.fn(),
      replace: () => jest.fn()
    },
    location,
    match: matchProps,
    staticContext: {}
  };

  return props;
}
