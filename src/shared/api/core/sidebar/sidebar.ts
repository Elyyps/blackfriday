import { FeaturedSidebarItems } from "./featured-sidebar-items";
import { BannerComponent } from "../banner/banner";

export class Sidebar {
  public banner?: BannerComponent;
  public featuredItemsGroups: FeaturedSidebarItems[];
}
