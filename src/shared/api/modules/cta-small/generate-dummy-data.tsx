import { CtaSmallModule } from "./cta-small.module";
import IconDefault from "@assets/icons/sign.svg";

export const generateCtaSmallModule = (): CtaSmallModule => ({
  buttonClick: () => (location.href = "#"),
  buttonTitle: "Naar deals",
  text: "Niet helemaal wat je zoekt? Geeft niks want we hebben meer!",
  icon: IconDefault,
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "CtaSmallModule"
});
