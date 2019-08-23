import { connect, MapStateToProps } from "react-redux";
import { ShopSingleHeaderComponent, IShopSingleHeaderComponentProps } from "../shop-single-header.component";
import { IAppState } from "@app/stores";
import { IScreenSize } from "@app/stores/settings";

interface IStateProps {
  screenSize: IScreenSize | undefined;
}

const mapStateToProps: MapStateToProps<IStateProps, IShopSingleHeaderComponentProps, IAppState> = state => {
  const { screenSize } = state.settings;

  return {
    screenSize
  };
};

export type ShopSingleHeaderContainerProps = IStateProps;
export const ShopSingleHeaderContainer = connect(mapStateToProps)(ShopSingleHeaderComponent);
