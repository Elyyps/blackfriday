import { UspModule } from "./usp";

export const uniqueSellingPoints: UspModule = {
  uniqueSellingPoints: [
    {
      icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/shop.svg",
      link: {
        url: "./stores-overview",
        title: "Overzicht van álle black friday winkels"
      }
    },
    {
      icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/clock.svg",
      link: {
        url: "./deals-overview",
        title: "Altijd up-to-date van de laatste deals"
      }
    },
    {
      icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/megaphone.svg",
      link: {
        url: "./",
        title: "Mis niets van Black Friday 2019"
      }
    }
  ]
};
