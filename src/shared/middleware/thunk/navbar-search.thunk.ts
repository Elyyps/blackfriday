import { Dispatch } from "react-redux";
import { navBarSearchActions } from "@app/stores/navbar-seach";
import { generateDemoStoreDummyData } from "@app/api/core/store/generate-dummy-data";

const getFilteredItems = (text: string) => async (dispatch: Dispatch<any>) => {
  try {
    // TODO: generate page dummy data

    dispatch(navBarSearchActions.setText({ currentFilter: text }));
    dispatch(navBarSearchActions.setItems({ stores: generateDemoStoreDummyData(), deals: [] }));
  } catch (error) {
    // tslint:disable-next-line: no-unused-expression no-unsafe-any
    // new FatalError(error.name, error.message, error.stack);
  }
};

export const navbarSearchThunks = {
  getFilteredItems
};
