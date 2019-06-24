import { Dispatch } from "react-redux";
import { IAppState, pageActions } from "@app/stores";
import FatalError from "@app/errors/fatal-error";

const getPage = (page: string) => async (
  dispatch: Dispatch<any>,
  getState: () => IAppState
) => {
  try {
    // TODO: generate page dummy data
  } catch (error) {
    // tslint:disable-next-line: no-unused-expression no-unsafe-any
    new FatalError(error.name, error.message, error.stack);
  }
};

export const pageThunks = {
  getPage
};
