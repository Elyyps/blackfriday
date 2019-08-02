import { Banner } from "./banner";
import CoolBlue from "@assets/cool-blue.svg";

export const generateDummyBannerComponentData = (): Banner => ({
  title: "Black Friday bij Coolblue",
  buttonTitle: "Meer deals",
  buttonLink: "/deals-overview",
  image: {
    src: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/ad.png",
    alt: "alt text oasis"
  },
  imageLink: "https://coolblue.nl",
  label: "22 t/m 26 nov.",
  logo: { src: CoolBlue, alt: "alt text CoolBlue" },
  text: "Een selectie van bizarre aanbiedingen.",
  moreInfoLink: "https://coolblue.nl",
  showAlternativeBanner: false
});
