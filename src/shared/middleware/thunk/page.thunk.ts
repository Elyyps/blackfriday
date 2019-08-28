import { Dispatch } from "react-redux";
import { IAppState, pageActions } from "@app/stores";
import { belgianPageList } from "@app/api/pagebuilder/generate-belgian-dummy-data";
import { dutchPageList } from "@app/api/pagebuilder/generate-dutch-dummy-data";
import { IBlackFridayRootURL } from "@app/stores/settings";
const getPage = (page: string) => async (dispatch: Dispatch<any>, getState: () => IAppState) => {
  try {
    const blackFridayRootUrl = getState().settings.blackFridayRootUrl;

    const currentPage = ((blackFridayRootUrl as IBlackFridayRootURL).rootUrl as string).includes(".be")
      ? belgianPageList.find(pageItem => pageItem.route === page)
      : dutchPageList.find(pageItem => pageItem.route === page);
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
