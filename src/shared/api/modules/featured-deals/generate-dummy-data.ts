import { FeaturedDealsModule } from "./featured-deals.module";

export const generateDummyFeaturedDealsData = (): FeaturedDealsModule => ({
  title: "Meer deals",
  deals: [
    {
      availableBrands: ["Apple", "Phillips", "Nintendo"],
      categories: ["Mode", "Huishouden"],
      id: "1",
      image:
        "https://d2ddoduugvun08.cloudfront.net/items/2q1D2t2D003Z1X023z18/Image%202019-07-01%20at%204.45.18%20PM.png?X-CloudApp-Visitor-Id=3342233&v=d96f45c6",
      label: "HOT",
      moreInfoLink: "/deals-overview",
      name: "Pocketveermatas Pocket Comfort x2001",
      newPrice: 2429,
      oldPrice: 3429,
      sale: "Bespaar -40%",
      stores: ["Mediamarkt"]
    },
    {
      availableBrands: ["Apple", "Phillips", "Nintendo"],
      categories: ["Mode", "Huishouden"],
      id: "1",
      image:
        "https://d2ddoduugvun08.cloudfront.net/items/2q1D2t2D003Z1X023z18/Image%202019-07-01%20at%204.45.18%20PM.png?X-CloudApp-Visitor-Id=3342233&v=d96f45c6",
      label: "HOT",
      moreInfoLink: "/deals-overview",
      name: "Pocketveermatas Pocket Comfort x2000",
      newPrice: 2429,
      oldPrice: 3429,
      sale: "Bespaar -40%",
      stores: ["Mediamarkt"]
    },
    {
      availableBrands: ["Apple", "Phillips", "Nintendo"],
      categories: ["Mode", "Huishouden"],
      id: "1",
      image:
        "https://d2ddoduugvun08.cloudfront.net/items/2q1D2t2D003Z1X023z18/Image%202019-07-01%20at%204.45.18%20PM.png?X-CloudApp-Visitor-Id=3342233&v=d96f45c6",
      label: "HOT",
      moreInfoLink: "/deals-overview",
      name: "Pocketveermatas Pocket Comfort x2000",
      newPrice: 2429,
      oldPrice: 3429,
      sale: "Bespaar -40%",
      stores: ["Mediamarkt"]
    },
    {
      availableBrands: ["Apple", "Phillips", "Nintendo"],
      categories: ["Mode", "Huishouden"],
      id: "1",
      image:
        "https://d2ddoduugvun08.cloudfront.net/items/2q1D2t2D003Z1X023z18/Image%202019-07-01%20at%204.45.18%20PM.png?X-CloudApp-Visitor-Id=3342233&v=d96f45c6",
      label: "HOT",
      moreInfoLink: "/deals-overview",
      name: "Pocketveermatas Pocket Comfort x2000",
      newPrice: 2429,
      oldPrice: 3429,
      sale: "Bespaar -40%",
      stores: ["Mediamarkt"]
    }
  ],
  seeMoreCard: {
    icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/store.svg",
    title: "Wij hebben meer winkels in ons overzicht",
    link: { url: "/stores-overview", title: "Alle winkels" }
  },
  topPadding: { desktopSpacing: 72, mobileSpacing: 48 },

  bottomPadding: { desktopSpacing: 72, mobileSpacing: 48 },
  background: { backgroundColour: "#f7f7f7" },
  id: "1",
  name: "FeaturedDealsModule"
});
