import { Dispatch } from "react-redux";
import { navBarSearchActions } from "@app/stores/navbar-seach";
import { getFilteredNavbarSearchDummyData } from "@app/api/modules/navbar/navbar-search/endpoints";

const getFilteredItems = (text: string) => async (dispatch: Dispatch<any>) => {
  try {
    const foundData = getFilteredNavbarSearchDummyData(text);
    dispatch(navBarSearchActions.setText({ currentFilter: text }));
    dispatch(navBarSearchActions.setItems({ stores: foundData.shops, deals: foundData.deals }));
  } catch (error) {
    // tslint:disable-next-line: no-unused-expression no-unsafe-any
    // new FatalError(error.name, error.message, error.stack);
  }
};

export const navbarSearchThunks = {
  getFilteredItems
};
