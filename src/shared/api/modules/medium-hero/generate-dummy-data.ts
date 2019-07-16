import { MediumHeroModule } from "./medium-hero";
// Dummy Data
import { headerContent } from "@app/api/core/header-content";
import Oasis from "@assets/oasis.jpg";
import { uniqueSellingPoints } from "@app/api/core/usp";

export const generateMediumHeroDummyData = (): MediumHeroModule => ({
  headerContent: headerContent,
  image: Oasis,
  usps: uniqueSellingPoints,
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "MediumHeroModule"
});
