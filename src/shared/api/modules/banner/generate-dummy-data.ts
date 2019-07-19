import { BannerModule } from "./banner.module";
import CoolBlue from "@assets/cool-blue.svg";
import Oasis from "@assets/oasis.jpg";

export const generateDummyBannerModule = (): BannerModule => ({
  title: "Black Friday bij Coolblue",
  buttonTitle: "Meer deals",
  buttonLink: "#",
  image: { src: Oasis, alt: "alt text oasis" },
  label: "22 t/m 26 nov.",
  text: "Een selectie van bizarre aanbiedingen. Meer info",
  logo: { src: CoolBlue, alt: "alt text CoolBlue" },
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "BannerModule"
});
