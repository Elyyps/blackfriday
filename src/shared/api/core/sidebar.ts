import { ISidebarComponentProps } from "@app/core/sidebar";
import { bannerProps } from "@app/api/core/banner";
import { tempFeaturedItems } from "./temp-featured-items";

export const sidebarContent: ISidebarComponentProps = {
  banner: bannerProps,
  items: tempFeaturedItems
};
