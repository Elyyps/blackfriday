import { MediumHeroModule } from "./medium-hero";
import { headerContent } from "@app/api/core/header-content";
import { uniqueSellingPoints } from "@app/api/core/usp";

export const generateMediumHeroDummyData = (): MediumHeroModule => ({
  headerContent,
  image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/store-banner.png",
  usps: uniqueSellingPoints,
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "MediumHeroModule"
});
