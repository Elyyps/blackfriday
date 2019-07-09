import { ShopCard } from "@app/api/core/shop-card";
import { MapStateToProps, MapDispatchToProps, connect } from "react-redux";
import { IStoresOverviewComponentProps, StoresOverviewComponent } from "..";
import { IAppState } from "@app/stores";
import { withRouter, RouteComponentProps } from "react-router";
import { shopsOverviewThunks } from "@app/middleware/thunk/shops-overview.thunk";
import { StoresOverviewModule } from "@app/api/modules/stores-overview/stores-overview.module";
import { shopsOverviewActions } from "@app/stores/stores-overview/stores-overview.action";
import { FilterBar } from "@app/api/core/filter-bar";

interface IStateProps {
  filterBar: FilterBar;
  shopCards: ShopCard[];
}

interface IDispatchProps {
  getShopCards: (status: string[], categories: string[], brands: string[], sortBy: string) => void;
  setShopCards: (shopCards: StoresOverviewModule) => void;
}

const mapStateToProps: MapStateToProps<IStateProps, IStoresOverviewComponentProps, IAppState> = state => {
  const { shopCards, filterBar } = state.shopsOverview;

  return { shopCards, filterBar };
};
const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IStoresOverviewComponentProps> = dispatch => ({
  getShopCards: (status: string[], categories: string[], brands: string[], sortBy: string) =>
    dispatch(shopsOverviewThunks.getShopsCards(status, categories, brands, sortBy)),
  setShopCards: (shopCards: StoresOverviewModule) => dispatch(shopsOverviewActions.setShopsOverview(shopCards))
});

export type StoresOverviewContainerProps = IStateProps & IDispatchProps & RouteComponentProps;

export const StoresOverviewContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StoresOverviewComponent)
);
