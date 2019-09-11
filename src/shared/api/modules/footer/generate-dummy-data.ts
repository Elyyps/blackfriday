import { MiddleFooter } from "./models/middle-footer";
import { BottomFooter } from "./models/bottom-footer";
import { TopFooter } from "./models/top-footer";
import { generateUSP } from "@app/api/core/usp/endpoints";
import { Footer } from "./footer.module";
import { generateDummyNewsletterModule } from "../newsletter/generate-dummy-data";

export const generateBottomFooterDutch = (): BottomFooter => ({
  copyright: "© 2019 · Black Friday Expert is een initiatief van Maddox Media B.V",
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
  logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/dutch/bf-nederland.svg"
});
export const generateBottomFooterBelgian = (): BottomFooter => ({
  copyright: "© 2019 · Black Friday Expert is een initiatief van Maddox Media B.V",
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
  logo: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/logo-blackfriday.svg"
});
export const generateMiddleFooter = (): MiddleFooter => ({
  links: [
    {
      id: "TRENDING_BLOCK",
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
      id: "SHOPS_BLOCK",
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
  modalTitle: "Inschrijven nieuwsbrief",
  newsletter: {
    title: "Aanmelden voor onze nieuwsbrief",
    text: "En ontvang ons de allerbeste aanbiedingen",
    buttonText: "Nieuwsbrief",
    buttonIcon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/newsletter/paper.svg"
  },
  googleReviews: {
    link: {
      url:
        "https://www.google.com/search?output=search&q=Black+Friday+Nederland&ludocid=1020966209707573937&kgs=5565f77d0465e24f&shndl=-1&source=sh/x/kp/local&entrypoint=sh/x/kp/local#lrd=0x47c6eebed8f7cb0f:0xe2b335bc14c02b1,1",
      title: "8 Google Reviews"
    },
    rating: 4.5
  },
  socialMedia: {
    id: "SOCIAL_BLOCK",
    title: "Eenvoudig met ons in contact",
    socialItem: [
      {
        text: "4.240 mensen vinden ons leuk",
        nameSocialMedia: "Facebook",
        image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/Social-Icons/facebook.svg",
        link: "https://www.facebook.com/BlackFridayNederland/"
      },
      {
        text: "Volg ons voor leuke acties",
        image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/Social-Icons/instagram.svg",
        link: "https://www.instagram.com/blackfridaynl/",
        nameSocialMedia: "Instagram"
      },
      {
        link: "mailto:info@blackfridaynederland.nl",
        nameSocialMedia: "Mailtje",
        image: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/Social-Icons/mail.svg",
        text: "Heeft u een vraag? Stel hem gerust!"
      }
    ]
  }
});

export const generateTopFooter = (): TopFooter => ({
  topLeftFooter: [
    {
      text: "132 winkels",
      icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/store.svg"
    },
    {
      text: "560 Deals",
      icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/medal.svg"
    }
  ],
  usp: generateUSP()
});

export const generateDummyFooterDataDutch = (): Footer => ({
  bottomFooter: generateBottomFooterDutch(),
  middleFooter: generateMiddleFooter(),
  newsletterItems: generateDummyNewsletterModule().items,
  topFooter: generateTopFooter(),
  id: "1",
  name: "FooterModule"
});
export const generateDummyFooterDataBelgian = (): Footer => ({
  bottomFooter: generateBottomFooterBelgian(),
  middleFooter: generateMiddleFooter(),
  newsletterItems: generateDummyNewsletterModule().items,
  topFooter: generateTopFooter(),
  id: "1",
  name: "FooterModule"
});
