import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";

import { IAppState } from "@app/stores";
import { INavbarSearchComponentProps, NavbarSearchComponent } from "../navbar-search.component";
import { DealCardModule } from "@app/api/core/deal-card";
import { ShopCardModule } from "@app/api/core/shop-card";
import { navbarSearchThunks } from "@app/middleware/thunk/navbar-search.thunk";

interface IStateProps {
  currentFilter: string;
  deals?: DealCardModule[];
  dealsTitle: string;
  shops?: ShopCardModule[];
  shopsTitle: string;
}
interface IDispatchProps {
  getCardsFiltered?: (text: string) => void;
}

const mapStateToProps: MapStateToProps<IStateProps, INavbarSearchComponentProps, IAppState> = state => {
  const { shops, deals, currentFilter } = state.navbarSearch;

  return { shops, deals, currentFilter, shopsTitle: "", dealsTitle: "" };
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, INavbarSearchComponentProps> = dispatch => ({
  getCardsFiltered: (text: string) => dispatch(navbarSearchThunks.getFilteredItems(text))
});

export type ContainerProps = IStateProps & IDispatchProps;
export const NavbarSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarSearchComponent);
