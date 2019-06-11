import { Dispatch } from "react-redux";
import { IAppState, pageActions } from "@app/stores";
import { PageApi, PageModel } from "@app/api";
import FatalError from "@app/errors/fatal-error";

const getPage = (page: string) => async (dispatch: Dispatch<any>, getState: () => IAppState) => {
  try {
    const api = new PageApi();

    api
      .pageRouteGet(page)
      .then(response => response.json())
      .then((response: PageModel) => {
        dispatch(pageActions.setCurrentPage({ page: response }));
        dispatch(pageActions.addToPages({ page: response }));
      });
  } catch (error) {
    // tslint:disable-next-line: no-unused-expression no-unsafe-any
    new FatalError(error.name, error.message, error.stack);
  }
};

export const pageThunks = {
  getPage
};
