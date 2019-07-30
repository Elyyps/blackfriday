import { ShopCard } from "@app/api/core/shop-card/shop-card";
import { MapStateToProps, MapDispatchToProps, connect } from "react-redux";
import { IStoresOverviewComponentProps, StoresOverviewComponent } from "..";
import { IAppState } from "@app/stores";
import { StoresOverviewModule } from "@app/api/modules/stores-overview/stores-overview.module";
import { FilterBar } from "@app/api/core/filter-bar/filter-bar";
import { generateFilterBarData } from "@app/api/core/filter-bar/endpoint";

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
  return { shopCards: [], filterBar: generateFilterBarData(), totalCards: 0 };
};
const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IStoresOverviewComponentProps> = dispatch => ({
  getShopCards: (
    oldItems: ShopCard[],
    currentPage: number,
    status: string[],
    categories: string[],
    brands: string[],
    sortBy: string
  ) => dispatch(() => {}),
  setShopCards: (shopCards: StoresOverviewModule) => dispatch(() => {})
});

export type StoresOverviewContainerProps = IStateProps & IDispatchProps;

export const StoresOverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoresOverviewComponent);
