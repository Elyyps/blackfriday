import { MediumHeroModule } from "./medium-hero";
import { headerContent } from "@app/api/core/header-content";
import { uniqueSellingPoints } from "@app/api/core/usp";

export const generateMediumHeroDummyDataBelgian = (): MediumHeroModule => ({
  headerContent: {
    title: headerContent.title,
    subtitle: headerContent.subtitle
  },
  image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/store-banner.jpg",
  usps: uniqueSellingPoints,
  id: "1",
  name: "MediumHeroModule"
});
export const generateMediumHeroDummyDataDutch = (): MediumHeroModule => ({
  headerContent: {
    title: headerContent.title,
    subtitle: headerContent.subtitle
  },
  image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/dutch/1.jpg",
  usps: uniqueSellingPoints,
  id: "1",
  name: "MediumHeroModule"
});
