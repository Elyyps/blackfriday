import { CtaSmallModule } from "./cta-small.module";
import IconDefault from "@assets/icons/sign.svg";

export const generateCtaSmallModule = (): CtaSmallModule => ({
  buttonLink: "/deals-overview",
  buttonTitle: "Naar deals",
  text: "Niet helemaal wat je zoekt? Geeft niks want we hebben meer!",
  icon: IconDefault,
  bottomMargin: "0",
  topMargin: "0",
  bottomPadding: { desktopPadding: 72, mobilePadding: 48 },
  background: { backgroundColour: "#f7f7f7" },
  id: "1",
  name: "CtaSmallModule"
});
