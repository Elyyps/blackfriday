import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";

import { IAppState } from "@app/stores";
import { INavbarSearchComponentProps, NavbarSearchComponent } from "../navbar-search.component";
import { Deal } from "@app/api/core/deal/deal";
import { navbarSearchThunks } from "@app/middleware/thunk/navbar-search.thunk";
import { Store } from "@app/api/core/store/store";

interface IStateProps {
  currentFilter: string;
  deals?: Deal[];
  dealsTitle: string;
  shops?: Store[];
  shopsTitle: string;
}
interface IDispatchProps {
  getCardsFiltered?: (text: string) => void;
}

const mapStateToProps: MapStateToProps<IStateProps, INavbarSearchComponentProps, IAppState> = state => {
  const { stores, deals, currentFilter } = state.navbarSearch;

  return { stores, deals, currentFilter, shopsTitle: "", dealsTitle: "" };
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, INavbarSearchComponentProps> = dispatch => ({
  getCardsFiltered: (text: string) => dispatch(navbarSearchThunks.getFilteredItems(text))
});

export type ContainerProps = IStateProps & IDispatchProps;
export const NavbarSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarSearchComponent);
