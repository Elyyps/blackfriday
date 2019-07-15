import { IBannerComponentProps } from "@app/core/banner";
import CoolBlue from "@assets/cool-blue.svg";
import Oasis from "@assets/oasis.jpg";

export const bannerProps: IBannerComponentProps = {
  buttonLink: "#",
  buttonTitle: "Meer deals",
  image: { src: Oasis, alt: "alt text oasis" },
  label: "22 t/m 26 nov.",
  logo: { src: CoolBlue, alt: "alt text CoolBlue" },
  text: "Een selectie van bizarre aanbiedingen. Meer info",
  title: "Black Friday bij Coolblue"
};
