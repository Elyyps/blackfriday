import { FeaturedStoresModule } from "./featured-shops.module";

export const dummyFeaturedShopsData: FeaturedStoresModule = {
  title: "Vergelijkbare winkels",
  shops: [
    {
      title: "Bekbeddiscounter.nl",
      content: "Een seletie van bizarre vele aanbiedingen.",
      button: {
        url: "/",
        title: "Naar deals"
      },
      seeMore: {
        url: "/",
        title: "Meer info"
      },
      timeLeftBar: { value: 0.8, text: "Nu geldig" },
      picture:
        "https://d2ddoduugvun08.cloudfront.net/items/2c3217062N3d2L320w0U/Image%202019-06-27%20at%203.17.28%20PM.png?X-CloudApp-Visitor-Id=3342233&v=03808fb0"
    },
    {
      title: "Swiss Sense",
      content: "Een seletie van bizarre vele aanbiedingen.",
      button: {
        url: "/",
        title: "Naar deals"
      },
      seeMore: {
        url: "/",
        title: "Meer info"
      },
      timeLeftBar: { value: 0, text: "ACTIE START OVER 5 DAGEN!" },
      picture:
        "https://d2ddoduugvun08.cloudfront.net/items/2c3217062N3d2L320w0U/Image%202019-06-27%20at%203.17.28%20PM.png?X-CloudApp-Visitor-Id=3342233&v=03808fb0"
    },
    {
      title: "Beter Bed",
      content: "Een seletie van bizarre vele aanbiedingen.",
      button: {
        url: "/",
        title: "Naar deals"
      },
      seeMore: {
        url: "/",
        title: "Meer info"
      },
      timeLeftBar: { value: 1, text: "Nu geldig" },
      picture:
        "https://d2ddoduugvun08.cloudfront.net/items/2c3217062N3d2L320w0U/Image%202019-06-27%20at%203.17.28%20PM.png?X-CloudApp-Visitor-Id=3342233&v=03808fb0"
    },
    {
      title: "Beter Bed",
      content: "Een seletie van bizarre vele aanbiedingen.",
      button: {
        url: "/",
        title: "Naar deals"
      },
      seeMore: {
        url: "/",
        title: "Meer info"
      },
      timeLeftBar: { value: 0.2, text: "Nu geldig" },
      picture:
        "https://d2ddoduugvun08.cloudfront.net/items/2c3217062N3d2L320w0U/Image%202019-06-27%20at%203.17.28%20PM.png?X-CloudApp-Visitor-Id=3342233&v=03808fb0"
    }
  ],
  seeMoreCard: {
    icon: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/footerIcons/store.svg",
    title: "Wij hebben meer winkels in ons overzicht",
    link: { url: "/", title: "Alle winkels" }
  },
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "FeaturedShopsModule"
};
