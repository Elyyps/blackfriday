import { connect, MapStateToProps } from "react-redux";
import { IAppState } from "@app/stores";
import { FeaturedCategories, IFeaturedCategoriesProps } from "@app/modules/featured-categories";
import { IScreenSize } from "@app/stores/settings";

interface IStateProps {
  screenSize: IScreenSize | undefined;
}

const mapStateToProps: MapStateToProps<IStateProps, IFeaturedCategoriesProps, IAppState> = state => {
  const { screenSize } = state.settings;

  return { screenSize };
};

export type FeaturedCategoriesContainerProps = IStateProps;
export const FeaturedCategoriesContainer = connect(mapStateToProps)(FeaturedCategories);
