import { connect, MapStateToProps } from "react-redux";
import { IAppState } from "@app/stores";
import { FeaturedCategories, IFeaturedCategoriesProps } from "@app/modules/featured-categories";

interface IStateProps {
  isMobile: boolean;
}

const mapStateToProps: MapStateToProps<IStateProps, IFeaturedCategoriesProps, IAppState> = state => {
  const { isMobile } = state.settings;

  return { isMobile };
};

export type FeaturedCategoriesContainerProps = IStateProps;
export const FeaturedCategoriesContainer = connect(mapStateToProps)(FeaturedCategories);
