import { INavBarModule } from "./navbar.module";
import { Link } from "@app/api/core/link";

export const generateDummyNavbarData = (): INavBarModule => ({
  label: "Black Friday 2019: NOG 10 dagen!",
  links: [
    { title: "Winkels", url: "/stores-overview" },
    { title: "Productdeals", url: "/deals-overview" },
    { title: "Black Friday", url: "/" }
  ],
  closeText: "Sluiten",
  logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/bf-expert-brand.svg",
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "NavBarModule",
  hamburgerMenu: [{ title: "ciao", url: "pino" }]
});
