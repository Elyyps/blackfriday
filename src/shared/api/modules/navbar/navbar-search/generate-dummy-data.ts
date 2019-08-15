import { NavbarSearchModuleInitial } from "./navbar-search-initial";
import { NavbarSearchModule } from "./navbar-search.module";
import { generateDemoStoreDummyData } from "@app/api/core/store/generate-dummy-data";

export const dummyNavbarSearchInitialData: NavbarSearchModuleInitial = {
  titleDeals: "Gevonden deals",
  titleShops: "Gevonden winkels"
};
const LIMIT = 5;
export const dummyNavbarSearchData: NavbarSearchModule = {
  deals: [
    {
      availableBrands: ["Apple", "Phillips", "Nintendo"],
      categories: ["Mode", "Huishouden"],
      id: "1",
      image:
        "https://d2ddoduugvun08.cloudfront.net/items/2q1D2t2D003Z1X023z18/Image%202019-07-01%20at%204.45.18%20PM.png?X-CloudApp-Visitor-Id=3342233&v=d96f45c6",
      label: "HOT",
      moreInfoLink: "/deals-overview",
      name: "Pocketveermatas Pocket Comfort x2000",
      newPrice: "€2.429",
      oldPrice: "€3.429",
      sale: "Bespaar 40%",
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
      newPrice: "€2.429",
      oldPrice: "€3.429",
      sale: "Bespaar 40%",
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
      newPrice: "€2.429",
      oldPrice: "€3.429",
      sale: "Bespaar 40%",
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
      newPrice: "€2.429",
      oldPrice: "€3.429",
      sale: "Bespaar 40%",
      stores: ["Mediamarkt"]
    }
  ],
  stores: generateDemoStoreDummyData().slice(0, LIMIT)
};
