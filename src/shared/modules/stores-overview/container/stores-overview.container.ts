import { ShopCard } from "@app/api/core/shop-card/shop-card";
import { MapStateToProps, MapDispatchToProps, connect } from "react-redux";
import { IStoresOverviewComponentProps, StoresOverviewComponent } from "..";
import { IAppState } from "@app/stores";
import { shopsOverviewThunks } from "@app/middleware/thunk/shops-overview.thunk";
import { StoresOverviewModule } from "@app/api/modules/stores-overview/stores-overview.module";
import { shopsOverviewActions } from "@app/stores/stores-overview/stores-overview.action";
import { FilterBar } from "@app/api/core/filter-bar/filter-bar";

interface IStateProps {
  filterBar: FilterBar;
  shopCards: ShopCard[];
  totalCards: number;
}

interface IDispatchProps {
  getShopCards: (
    oldItems: ShopCard[],
    currentPage: number,
    status: string[],
    categories: string[],
    brands: string[],
    sortBy: string
  ) => void;
  setShopCards: (shopCards: StoresOverviewModule) => void;
}

const mapStateToProps: MapStateToProps<IStateProps, IStoresOverviewComponentProps, IAppState> = state => {
  const { filterBar, shopCards, totalCards } = state.shopsOverview;

  return { shopCards, filterBar, totalCards };
};
const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IStoresOverviewComponentProps> = dispatch => ({
  getShopCards: (
    oldItems: ShopCard[],
    currentPage: number,
    status: string[],
    categories: string[],
    brands: string[],
    sortBy: string
  ) => dispatch(shopsOverviewThunks.getShopsCards(oldItems, currentPage, status, categories, brands, sortBy)),
  setShopCards: (shopCards: StoresOverviewModule) => dispatch(shopsOverviewActions.setShopsOverview(shopCards))
});

export type StoresOverviewContainerProps = IStateProps & IDispatchProps;

export const StoresOverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoresOverviewComponent);
