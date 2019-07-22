import { Dispatch } from "react-redux";
import { getFilteredNavbarSearchDummyData } from "@app/api/modules/navbar-search/endpoints";
import { navBarSearchActions } from "@app/stores/navbar-seach";

const getFilteredItems = (text: string) => async (dispatch: Dispatch<any>) => {
  try {
    // TODO: generate page dummy data

    dispatch(navBarSearchActions.setText({ currentFilter: text }));
    const data = getFilteredNavbarSearchDummyData(text);
    dispatch(navBarSearchActions.setItems({ shops: data.shops, deals: data.deals }));
  } catch (error) {
    // tslint:disable-next-line: no-unused-expression no-unsafe-any
    // new FatalError(error.name, error.message, error.stack);
  }
};

export const navbarSearchThunks = {
  getFilteredItems
};
