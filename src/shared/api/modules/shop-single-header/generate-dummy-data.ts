import { ShopSingleHeaderModule } from "./shop-single-header.module";
import CoolBlue from "@assets/cool-blue.svg";
import { generateShopSingleBodyTextDummydata } from "../body-text/generate-dummy-data";

export const generatedummyShopSingleHeaderData = (): ShopSingleHeaderModule => ({
  title: "15% korting op het hele assortiment",
  rating: { value: 5, text: "Beoordeel deze deal" },
  shareSocial: {
    facebook: { title: "Facebook sharing", url: "http://viper.blackfridaynederland.nl/shop-single" }
  },
  bodyTextModule: {
    html: generateShopSingleBodyTextDummydata(),
    containerSize: "full",
    bottomMargin: "",
    containerAlignment: "left",
    name: "shopSingleBodyText",
    topMargin: "",
    id: ""
  },
  backLink: { title: "Home", url: "./" },
  // "Vier Black Friday bij Beddenreus en ontvang 15% korting op alles!Black Friday bij Beddenreus wil je niet missen! Je geniet van maar liefst 15% korting op alles. Extra interessant: Black Friday duurt bij Beddenreus niet één dag maar ruim een week. Dé week om eens goed na te denken over een nieuwe boxspring, matras of dekbedovertrek! Want 15% korting dat is héél veel! Hét ideale moment dus om jouw favoriete boxspring, matras of winterdekbed te kopen. Online én in de winkel. Meer info",
  CheckListTitle: "De voordelen van shoppen bij Beddenreus tijdens Black Friday.",
  checkList: [
    "Profiteer van 15% op korting op alles",
    "Online én in de winkels",
    "De hele week aanbiedingen van 16-11 t/m 26-11",
    "Ruimere openingstijden"
  ],
  storeLink: {
    title: "Beddenreus",
    url: "/stores-single"
  },
  keywords: ["Wonen & slapen", "Swiss sense", "hastens"],

  picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/stores-single.png",
  favoriteButton: {
    title: "Winkel opslaan als favoriet",
    url: "/"
  },
  discountPicture: CoolBlue,
  discountButton: {
    title: "Naar deals",
    url: "/"
  },
  discountTitle: "15% korting op het hele assortiment",
  links: [{ title: "Home", url: "/" }, { title: "Alle winkels", url: "/" }],
  smallBackLink: { title: "Alle winkels", url: "/" },
  discountSubtitle: "Gebruik deze kortingscode:",
  couponCode: "black15",
  timeLeftBar: {
    value: 0.8,
    text: "NU geldig"
  },
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "ShopSingleHeaderModule"
});
