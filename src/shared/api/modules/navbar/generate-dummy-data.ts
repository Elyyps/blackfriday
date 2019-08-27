import { INavBarModule } from "./navbar.module";

import { MenuItemExpandable } from "@app/api/core/menu-item/menu-item-expanded";
import { MenuItemLink } from "@app/api/core/menu-item/menu-item-link";

export const generateDummyNavbarDataBelgian = (): INavBarModule => ({
  label: "Black Friday 2019: NOG 10 dagen!",
  links: [
    { title: "Winkels", url: "/stores-overview" },
    { title: "Productdeals", url: "/deals-overview" },
    { title: "Black Friday", url: "/black-friday-2019" }
  ],
  closeText: "Sluiten",
  logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/logo-blackfriday.svg",
  id: "1",
  name: "NavBarModule",
  navbarMenuItem: [
    { url: "./stores-overview", text: "Winkels" } as MenuItemLink,
    { url: "./deals-overview", text: "Productdeals" } as MenuItemLink,
    { url: "./black-friday-2019", text: "BlackFriday 2019" } as MenuItemLink,
    { url: "./blog-overview", text: "Cyber Monday" } as MenuItemLink,
    { url: "./blog-overview", text: "Partner worden?" } as MenuItemLink,
    { url: "./blog-overview", text: "Blog" } as MenuItemLink,
    {
      text: "BlackFriday Apple",
      links: [
        {
          title: "Apple iMac (2019)",
          url: "./productline-overview"
        },
        {
          title: "iPhoneX",
          url: "./productline-overview"
        },
        {
          title: "Apple Magic Mouse 2",
          url: "./productline-overview"
        },
        {
          title: "Apple Ipad Air(2019)",
          url: "./productline-overview"
        },
        {
          title: "Apple MacBook Air 13,3''",
          url: "./productline-overview"
        }
      ]
    } as MenuItemExpandable,

    {
      text: "BlackFriday Microsoft",
      links: [
        {
          title: "Microsoft Surface Book 2",
          url: "./productline-overview"
        },
        {
          title: "Microsoft Arc Touch Mouse",
          url: "./productline-overview"
        },
        {
          title: "Xbox One X 1TB ",
          url: "./productline-overview"
        },
        {
          title: "Microsoft Xbox One Draadloze Controller Wit",
          url: "./productline-overview"
        },
        {
          title: "Microsoft Xbox One Play & Charge Kit",
          url: "./productline-overview"
        }
      ]
    } as MenuItemExpandable
  ]
});
export const generateDummyNavbarDataDutch = (): INavBarModule => ({
  label: "Black Friday 2019: NOG 10 dagen!",
  links: [
    { title: "Winkels", url: "/stores-overview" },
    { title: "Productdeals", url: "/deals-overview" },
    { title: "Black Friday", url: "/black-friday-2019" }
  ],
  closeText: "Sluiten",
  logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/dutch/bf-nederland.svg",
  id: "1",
  name: "NavBarModule",
  navbarMenuItem: [
    { url: "./stores-overview", text: "Winkels" } as MenuItemLink,
    { url: "./deals-overview", text: "Productdeals" } as MenuItemLink,
    { url: "./black-friday-2019", text: "BlackFriday 2019" } as MenuItemLink,
    { url: "./blog-overview", text: "Cyber Monday" } as MenuItemLink,
    { url: "./blog-overview", text: "Partner worden?" } as MenuItemLink,
    { url: "./blog-overview", text: "Blog" } as MenuItemLink,
    {
      text: "BlackFriday Apple",
      links: [
        {
          title: "Apple iMac (2019)",
          url: "./productline-overview"
        },
        {
          title: "iPhoneX",
          url: "./productline-overview"
        },
        {
          title: "Apple Magic Mouse 2",
          url: "./productline-overview"
        },
        {
          title: "Apple Ipad Air(2019)",
          url: "./productline-overview"
        },
        {
          title: "Apple MacBook Air 13,3''",
          url: "./productline-overview"
        }
      ]
    } as MenuItemExpandable,

    {
      text: "BlackFriday Microsoft",
      links: [
        {
          title: "Microsoft Surface Book 2",
          url: "./productline-overview"
        },
        {
          title: "Microsoft Arc Touch Mouse",
          url: "./productline-overview"
        },
        {
          title: "Xbox One X 1TB ",
          url: "./productline-overview"
        },
        {
          title: "Microsoft Xbox One Draadloze Controller Wit",
          url: "./productline-overview"
        },
        {
          title: "Microsoft Xbox One Play & Charge Kit",
          url: "./productline-overview"
        }
      ]
    } as MenuItemExpandable
  ]
});
