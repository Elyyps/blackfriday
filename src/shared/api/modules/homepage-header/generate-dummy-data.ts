import { HomepageHeader } from "./homepage-header.module";

import iears from "@assets/dummy-images/product-thumbnails/iears.png";
import imac from "@assets/dummy-images/product-thumbnails/imac.png";
import iphone from "@assets/dummy-images/product-thumbnails/iphone.png";
import loader from "@assets/dummy-images/product-thumbnails/loader.png";

import CoolBlue from "@assets/cool-blue.svg";
export const generateHomePageHeaderBelgian = (): HomepageHeader => ({
  title: "Black Friday België",
  durationBlackFridayText: "Hoe lang nog?",
  startingDateText: "Wanneer is Black Friday",
  popularStoresTitle: "Populaire winkels",
  popularProductsTitle: "Populaire onderwerpen",
  description: [
    "Overzicht van alle Black Friday winkels",
    "Altijd up-to-date van de laatste deals",
    "Mis niets van Black Friday 2019"
  ],
  durationBlackFriday: "6 maanden & 2 dagen ",
  startingDate: "29 November 2019",
  arrowPanelslinks: [
    {
      icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/medal.svg",
      link: { title: "Productdeals", url: "/deals-overview" }
    },
    {
      icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/store.svg",
      link: { title: "Deelnemende winkels", url: "/stores-overview" }
    }
  ],
  label: "Black Friday 2019: NOG 10 dagen!",
  slides: [
    {
      link: {
        title: "Lees meer",
        url: "/stores-single"
      },
      title: "Handige Black Friday Tips",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/%3AblackFriday%3AbackFridayAd.jpg"
    },
    {
      link: {
        title: "Lees meer",
        url: "/stores-single"
      },
      title: "Handige Black Friday Tips",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/video-thumbnail.jpg",
      video: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/BlackFridayNederland-16x9.mp4"
    },
    {
      link: {
        title: "Lees meer",
        url: "/stores-single"
      },
      title: "Handige Black Friday Tips",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/%3AblackFriday%3AbackFridayAd.jpg"
    }
  ],
  popularProducts: [
    {
      image: iears,
      link: { url: "/stores-single", title: "Apple Airpods" }
    },
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
    }
  ],
  popularStores: [
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
      image: CoolBlue,
      link: { url: "/stores-single", title: "De Bijenkorf" }
    }
  ],
  id: "1",
  name: "HomepageHeader"
});

export const generateHomePageHeaderDutch = (): HomepageHeader => ({
  title: "Black Friday Nederland",
  durationBlackFridayText: "Hoe lang nog?",
  startingDateText: "Wanneer is Black Friday",
  popularStoresTitle: "Populaire winkels",
  popularProductsTitle: "Populaire onderwerpen",
  description: [
    "Overzicht van alle Black Friday winkels",
    "Altijd up-to-date van de laatste deals",
    "Mis niets van Black Friday 2019"
  ],
  durationBlackFriday: "6 maanden & 2 dagen ",
  startingDate: "29 November 2019",
  arrowPanelslinks: [
    {
      icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/medal.svg",
      link: { title: "Productdeals", url: "/deals-overview" }
    },
    {
      icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/store.svg",
      link: { title: "Deelnemende winkels", url: "/stores-overview" }
    }
  ],
  label: "Black Friday 2019: NOG 10 dagen!",
  slides: [
    {
      link: {
        title: "Lees meer",
        url: "/stores-single"
      },
      title: "Handige Black Friday Tips",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/dutch/3.jpg"
    },
    {
      link: {
        title: "Lees meer",
        url: "/stores-single"
      },
      title: "Handige Black Friday Tips",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/video-thumbnail.jpg",
      video: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/BlackFridayNederland-16x9.mp4"
    },
    {
      link: {
        title: "Lees meer",
        url: "/stores-single"
      },
      title: "Handige Black Friday Tips",
      image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/dutch/3.jpg"
    }
  ],
  popularProducts: [
    {
      image: iears,
      link: { url: "/stores-single", title: "Apple Airpods" }
    },
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
    }
  ],
  popularStores: [
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
      image: CoolBlue,
      link: { url: "/stores-single", title: "De Bijenkorf" }
    }
  ],
  id: "1",
  name: "HomepageHeader"
});
