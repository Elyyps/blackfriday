import { Dispatch } from "react-redux";
import { IAppState, pageActions } from "@app/stores";
import { pageList } from "@app/api/pagebuilder/generate-dummy-data";

const getPage = (page: string) => async (dispatch: Dispatch<any>, getState: () => IAppState) => {
  try {
    const currentPage = pageList.find(pageItem => pageItem.route === page);

    if (currentPage) {
      dispatch(pageActions.setCurrentPage({ page: currentPage }));
    }
  } catch (error) {
    // tslint:disable-next-line: no-unused-expression no-unsafe-any
    // new FatalError(error.name, error.message, error.stack);
  }
};

export const pageThunks = {
  getPage
};
