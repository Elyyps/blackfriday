import { FeaturedStoresModule } from "./featured-shops.module";
import { generateDemoStoreDummyData } from "@app/api/core/store/generate-dummy-data";

export const dummyFeaturedShopsData = (): FeaturedStoresModule => ({
  title: "Vergelijkbare winkels",
  stores: generateDemoStoreDummyData().slice(0, 8),
  seeMoreCard: {
    icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/store.svg",
    title: "Wij hebben meer winkels in ons overzicht",
    link: { url: "/", title: "Alle winkels" }
  },
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "FeaturedStoresModule"
});
