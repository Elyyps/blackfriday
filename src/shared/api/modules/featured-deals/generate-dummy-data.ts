import { FeaturedDealsModule } from "./featured-deals.module";

export const generateDummyFeaturedDealsData = (): FeaturedDealsModule => ({
  title: "Meer deals",
  deals: [
    {
      title: "Pocketveermatas Pocket Comfort x2000",
      subtitle: "Mediamarkt",
      oldPrice: "€3.429",
      newPrice: "€2.429",
      discountText: "Bespaar 40%",
      picture:
        "https://d2ddoduugvun08.cloudfront.net/items/2q1D2t2D003Z1X023z18/Image%202019-07-01%20at%204.45.18%20PM.png?X-CloudApp-Visitor-Id=3342233&v=d96f45c6",
      button: { title: "Naar deal", url: "/deals-overview" }
    },
    {
      title: "Hoofdkussen Actie kussenset",
      subtitle: "Mediamarkt",
      label: "Hot",
      oldPrice: "€3.429",
      newPrice: "€2.429",
      discountText: "Bespaar 40%",
      picture:
        "https://d2ddoduugvun08.cloudfront.net/items/42013C072O2711070D0a/Image%202019-07-01%20at%204.46.51%20PM.png?X-CloudApp-Visitor-Id=3342233&v=c0749925",
      button: { title: "Naar deal", url: "/deals-overview" }
    },
    {
      title: "Lattenbodem FLEXUS 2600 VL",
      subtitle: "Mediamarkt",
      oldPrice: "€3.429",
      newPrice: "€2.429",
      discountText: "Bespaar 40%",
      picture:
        "https://d2ddoduugvun08.cloudfront.net/items/193s25422A3q0v2F1f35/Image%202019-07-01%20at%204.47.42%20PM.png?X-CloudApp-Visitor-Id=3342233&v=b6e3280e",
      button: { title: "Naar deal", url: "/deals-overview" }
    },
    {
      title: "Dyson apparaten met korting",
      subtitle: "Mediamarkt",
      oldPrice: "€3.429",
      newPrice: "€2.429",
      discountText: "Bespaar 40%",
      picture:
        "https://d2ddoduugvun08.cloudfront.net/items/2R2d2B0a0e2o3528123s/Image%202019-07-01%20at%204.48.22%20PM.png?X-CloudApp-Visitor-Id=3342233&v=88efdc5a",
      button: { title: "Naar deal", url: "/deals-overview" }
    }
  ],
  seeMoreCard: {
    icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/store.svg",
    title: "Wij hebben meer winkels in ons overzicht",
    link: { url: "/stores-overview", title: "Alle winkels" }
  },
  bottomMargin: "0",
  topMargin: "0",
  bottomPadding: { desktopPadding: 72, mobilePadding: 48 },
  background: { backgroundColour: "#f7f7f7" },
  id: "1",
  name: "FeaturedDealsModule"
});
