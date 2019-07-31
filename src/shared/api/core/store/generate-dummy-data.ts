import { StoreStatus, Store } from "./store";

export const generateSingleStoreDummyData = (): Store => ({
  status: StoreStatus.NowValid,
  categories: ["Audio", "Games"],
  availableBrands: ["Apple", "Phillips", "Nintendo"],
  name: "Coolblue",
  moreInfoLink: "https://www.coolblue.nl/",
  description: "Een selectie van bizar vele aanbieden",
  logo: "",
  timeLeftPercentage: 80
});
