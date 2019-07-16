import { INavBarModule } from "./navbar.module";

export const generateDummyNavbarData = (): INavBarModule => ({
  label: "Black Friday 2019: NOG 10 dagen!",
  links: [
    { title: "Winkels", url: "/playground-pedro" },
    { title: "Productdeals", url: "/playground-daniele" },
    { title: "Black Friday", url: "/playground-ahmed" }
  ],
  closeText: "Sluiten",
  logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/bf-expert-brand.svg"
});
