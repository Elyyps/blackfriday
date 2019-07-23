import { NavbarSearchModuleInitial } from "./navbar-search-initial";
import { NavbarSearchModule } from "./navbar-search.module";

export const dummyNavbarSearchInitialData: NavbarSearchModuleInitial = {
  titleDeals: "Gevonden deals",
  titleShops: "Gevonden winkels",
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "NavbarSearchModuleInitial"
};

export const dummyNavbarSearchData: NavbarSearchModule = {
  deals: [
    {
      title: "Pocketveermatas Pocket Comfort x2000",
      subtitle: "Mediamarkt",
      oldPrice: "€3.429",
      newPrice: "€2.429",
      discountText: "Bespaar 40%",
      picture:
        "https://d2ddoduugvun08.cloudfront.net/items/2q1D2t2D003Z1X023z18/Image%202019-07-01%20at%204.45.18%20PM.png?X-CloudApp-Visitor-Id=3342233&v=d96f45c6",
      button: { title: "Naar deals", url: "/" }
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
      button: { title: "Naar deals", url: "/" }
    },
    {
      title: "Lattenbodem FLEXUS 2600 VL",
      subtitle: "Mediamarkt",
      oldPrice: "€3.429",
      newPrice: "€2.429",
      discountText: "Bespaar 40%",
      picture:
        "https://d2ddoduugvun08.cloudfront.net/items/193s25422A3q0v2F1f35/Image%202019-07-01%20at%204.47.42%20PM.png?X-CloudApp-Visitor-Id=3342233&v=b6e3280e",
      button: { title: "Naar deals", url: "/" }
    },
    {
      title: "Dyson apparaten met korting",
      subtitle: "Mediamarkt",
      oldPrice: "€3.429",
      newPrice: "€2.429",
      discountText: "Bespaar 40%",
      picture:
        "https://d2ddoduugvun08.cloudfront.net/items/2R2d2B0a0e2o3528123s/Image%202019-07-01%20at%204.48.22%20PM.png?X-CloudApp-Visitor-Id=3342233&v=88efdc5a",
      button: { title: "Naar deals", url: "/" }
    },
    {
      title: "Dyson apparaten met korting #2",
      subtitle: "Mediamarkt",
      oldPrice: "€3.429",
      newPrice: "€2.429",
      discountText: "Bespaar 40%",
      picture:
        "https://d2ddoduugvun08.cloudfront.net/items/2R2d2B0a0e2o3528123s/Image%202019-07-01%20at%204.48.22%20PM.png?X-CloudApp-Visitor-Id=3342233&v=88efdc5a",
      button: { title: "Naar deals", url: "/" }
    }
  ],
  shops: [
    {
      title: "Amac",
      picture:
        "https://d2ddoduugvun08.cloudfront.net/items/2R2d2B0a0e2o3528123s/Image%202019-07-01%20at%204.48.22%20PM.png?X-CloudApp-Visitor-Id=3342233&v=88efdc5a",

      button: { title: "Naar deals", url: "/" },
      timeLeftBar: { value: 0.3, text: "BIJNA AFGELOPEN!" },
      content: "Een selectie van bizarre vele aanbiedingen",
      seeMore: { title: "Meer Info", url: "/" },
      category: "fdsfds",
      brand: "coolblue"
    },
    {
      title: "Nike",
      picture:
        "https://d2ddoduugvun08.cloudfront.net/items/2R2d2B0a0e2o3528123s/Image%202019-07-01%20at%204.48.22%20PM.png?X-CloudApp-Visitor-Id=3342233&v=88efdc5a",

      button: { title: "Naar deals", url: "/" },
      timeLeftBar: { value: 0.1, text: "BIJNA AFGELOPEN!" },
      content: "Een selectie van bizarre vele aanbiedingen",
      seeMore: { title: "Meer Info", url: "/" },
      category: "fdsfds",
      brand: "coolblue"
    },
    {
      title: "50Five",
      picture:
        "https://d2ddoduugvun08.cloudfront.net/items/2R2d2B0a0e2o3528123s/Image%202019-07-01%20at%204.48.22%20PM.png?X-CloudApp-Visitor-Id=3342233&v=88efdc5a",

      button: { title: "Meer info", url: "/" },
      timeLeftBar: { value: 0.8, text: "nu geldig" },
      content: "Een selectie van bizarre vele aanbiedingen",
      seeMore: { title: "Meer Info", url: "/" },
      category: "fdsfds",
      brand: "coolblue"
    }
  ],
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "NavbarSearchModule"
};
