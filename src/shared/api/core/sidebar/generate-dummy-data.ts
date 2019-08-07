import { Sidebar } from "@app/api/core/sidebar/sidebar";
import party from "@assets/icons/party.svg";
import imac from "@assets/dummy-images/product-thumbnails/imac.png";
import iphone from "@assets/dummy-images/product-thumbnails/iphone.png";
import loader from "@assets/dummy-images/product-thumbnails/loader.png";
import CoolBlue from "@assets/cool-blue.svg";
import { generateDummyBannerComponentData } from "../banner/generate-dummy-data";

export const generateSidebarData = (): Sidebar => {
  const data: Sidebar = {
    banner: { ...generateDummyBannerComponentData() },
    featuredItemsGroups: [
      {
        title: "Een greep uit onze deals",
        featuredItems: [
          {
            image: imac,
            link: { url: "/stores-single", title: "Apple iPhones" }
          },
          {
            image: iphone,
            link: { url: "/stores-single", title: "Apple MacBooks" }
          },
          {
            image: loader,
            link: { url: "/stores-single", title: "Apple iMacs" }
          },
          {
            icon: party,
            link: { url: "/stores-single", title: "Naar alle deals!" }
          }
        ]
      },
      {
        title: "Black Friday Winkels",
        featuredItems: [
          {
            image: CoolBlue,
            link: { url: "/stores-single", title: "Coolblue" }
          },
          {
            image: CoolBlue,
            link: { url: "/stores-single", title: "Alternate" }
          },
          {
            image: CoolBlue,
            link: { url: "/stores-single", title: "Beddenreus" }
          },
          {
            icon: party,
            link: { url: "/stores-overview", title: "Naar alle winkels!" }
          }
        ]
      }
    ]
  };

  return data;
};
