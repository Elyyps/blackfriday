import { INavBarModule } from "./navbar.module";

import { MenuItemExpandable } from "@app/api/core/menu-item/menu-item-expanded";
import { MenuItemLink } from "@app/api/core/menu-item/menu-item-link";

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
  hamburgerMenu: [
    {
      text: "Apple",
      links: [
        {
          title: "MAC",
          url: "./"
        },
        {
          title: "iPhoneX",
          url: "./"
        },
        {
          title: "iPhoneX",
          url: "./"
        },
        {
          title: "iPhoneX",
          url: "./"
        },
        {
          title: "iPhoneX",
          url: "./"
        }
      ]
    } as MenuItemExpandable,
    { url: "./", text: "Samsung" } as MenuItemLink,
    {
      text: "Apple",
      links: [
        {
          title: "MAC",
          url: "./"
        },
        {
          title: "iPhoneX",
          url: "./"
        },
        {
          title: "iPhoneX",
          url: "./"
        },
        {
          title: "iPhoneX",
          url: "./"
        },
        {
          title: "iPhoneX",
          url: "./"
        }
      ]
    } as MenuItemExpandable,
    { url: "./", text: "BlackFriday 2019" } as MenuItemLink,
    { url: "./", text: "BlackFriday 2019" } as MenuItemLink,
    { url: "./", text: "BlackFriday 2019" } as MenuItemLink,
    { url: "./", text: "BlackFriday 2019" } as MenuItemLink
  ]
});
