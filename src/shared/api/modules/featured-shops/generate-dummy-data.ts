import { FeaturedStoresModule } from "./featured-shops.module";
import { generateDemoStoreDummyData } from "@app/api/core/store/generate-dummy-data";

const amountOfItems = 8;
export const dummyFeaturedShopsData = (): FeaturedStoresModule => ({
  title: "Vergelijkbare winkels",
  stores: generateDemoStoreDummyData().slice(0, amountOfItems),
  seeMoreCard: {
    icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/store.svg",
    title: "Wij hebben meer winkels in ons overzicht",
    link: { url: "/", title: "Alle winkels" }
  },
  id: "1",
  name: "FeaturedStoresModule"
});
