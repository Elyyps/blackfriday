import { BannerComponent } from "./banner";
import CoolBlue from "@assets/cool-blue.svg";
import Oasis from "@assets/oasis.jpg";

export const generateDummyBannerComponentData = (): BannerComponent => ({
  title: "Black Friday bij Coolblue",
  buttonTitle: "Meer deals",
  buttonLink: "/deals-overview",
  image: { src: Oasis, alt: "alt text oasis" },
  label: "22 t/m 26 nov.",
  logo: { src: CoolBlue, alt: "alt text CoolBlue" },
  text: "Een selectie van bizarre aanbiedingen. Meer info"
});
