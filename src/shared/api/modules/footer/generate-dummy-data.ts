import { MiddleFooter } from "./models/middle-footer";
import { BottomFotter } from "./models/bottom-footer";
import { TopFooter } from "./models/top-footer";

export const bottomFooter = (): BottomFotter => ({
  copyright:
    "© 2019 · Black Friday Expert is een initiatief van Maddox Media B.V",
  items: [
    {
      title: "Partner worden?",
      url: "/"
    },
    {
      title: "Algemene voorwaarden",
      url: "/"
    },
    {
      title: "Privacy",
      url: "/"
    },
    {
      title: "Cookiebeleid",
      url: "/"
    }
  ],
  logo:
    "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/bf-expert-brand.svg"
});

export const middleFooter = (): MiddleFooter => ({
  links: [
    {
      title: "Wat is er nu trending",
      links: [
        {
          title: "Black Friday 2019",
          url: "/"
        },
        {
          title: "Black Friday Apple",
          url: "/"
        },
        {
          title: "Black Friday Deals",
          url: "/"
        },
        {
          title: "Black Friday Elektronica",
          url: "/"
        },
        {
          title: "Black Friday Gaming",
          url: "/"
        },
        {
          title: "Black Friday Winkels",
          url: "/"
        },
        {
          title: "Cyber Monday 2019",
          url: "/"
        }
      ]
    },
    {
      title: "Meer Black Friday",
      links: [
        {
          title: "Airpods Black Friday",
          url: "/"
        },
        {
          title: "Black Friday Kleding",
          url: "/"
        },
        {
          title: "Black Friday Jumbo",
          url: "/"
        },
        {
          title: "Black Friday Rituals",
          url: "/"
        },
        {
          title: "Black Friday G-star",
          url: "/"
        },
        {
          title: "Black Friday Center Parcs",
          url: "/"
        },
        {
          title: "Black Friday Computer",
          url: "/"
        }
      ]
    }
  ],
  newsletter: {
    title: "Aanmelden voor onze nieuwsbrief",
    text: "En ontvang ons de allerbeste aanbiedingen",
    bottonText: "Nieuwsbrief",
    bottonIcon:
      "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/newsletter/paper.svg"
  },
  socialMedia: {
    title: "Eenvoudig met ons in contact",
    socialItem: [
      {
        text: "4.240 mensen vinden ons leuk",
        nameSocialMedia: "Facebook",
        image:
          "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/Social-Icons/facebook.svg",
        link: "https://www.facebook.com/BlackFridayNederland/"
      },
      {
        text: "Volg ons voor leuke acties",
        image:
          "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/Social-Icons/instagram.svg",
        link: "https://www.instagram.com/blackfridaynl/",
        nameSocialMedia: "Instagram"
      },
      {
        link: "mailto:info@blackfridaynederland.nl",
        nameSocialMedia: "Mailtje",
        image:
          "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/Social-Icons/mail.svg",
        text: "Heeft u een vraag? Stel hem gerust!"
      }
    ]
  }
});

export const topFooter = (): TopFooter => ({
  topLeftFooter: [
    {
      text: "132 winkels",
      icon:
        "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/store.svg"
    },
    {
      text: "560 Deals",
      icon:
        "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/medal.svg"
    }
  ],
  topRightFooter: [
    {
      icon:
        "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/shop.svg",
      text: {
        url: "./",
        title: "Overzicht van álle black friday winkels"
      }
    },
    {
      icon:
        "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/clock.svg",
      text: {
        url: "./",
        title: "Altijd up-to-date van de laatste deals"
      }
    },
    {
      icon:
        "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/megaphone.svg",
      text: {
        url: "./",
        title: "Mis niets van Black Friday 2019"
      }
    }
  ]
});
