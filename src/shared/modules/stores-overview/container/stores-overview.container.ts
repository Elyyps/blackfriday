import { ShopCard } from "@app/api/core/shop-card";
import { MapStateToProps, MapDispatchToProps, connect } from "react-redux";
import { IStoresOverviewComponentProps, StoresOverviewComponent } from "..";
import { IAppState } from "@app/stores";
import { withRouter, RouteComponentProps } from "react-router";
import { shopsOverviewThunks } from "@app/middleware/thunk/shops-overview.thunk";

interface IStateProps {
  shopCards: ShopCard[];
}

interface IDispatchProps {
  getShopCards: (
    status: string,
    categories: string[],
    brands: string[],
    sortBy: string
  ) => void;
}

const mapStateToProps: MapStateToProps<
  IStateProps,
  IStoresOverviewComponentProps,
  IAppState
> = state => {
  const { shopCards } = state.shopsOverview;

  return { shopCards };
};
const mapDispatchToProps: MapDispatchToProps<
  IDispatchProps,
  IStoresOverviewComponentProps
> = dispatch => ({
  getShopCards: (
    status: string,
    categories: string[],
    brands: string[],
    sortBy: string
  ) =>
    dispatch(
      shopsOverviewThunks.getShopsCards(status, categories, brands, sortBy)
    )
});

export type StoresOverviewContainerProps = IStateProps &
  IDispatchProps &
  RouteComponentProps;

export const StoresOverviewContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StoresOverviewComponent)
);
