import IconDefault from "@assets/icons/send.svg";
import { CtaNewsletterModule } from "./cta-newsletter.module";

export const generateCtaNewsLetterModule = (): CtaNewsletterModule => ({
  buttonTitle: "Meld je aan",
  text: "Op de hoogte blijven? Meld je dan aan voor onze nieuwsbrief!",
  icon: IconDefault,
  bottomMargin: "0",
  topMargin: "0",
  bottomPadding: { desktopPadding: 72, mobilePadding: 48 },
  background: { backgroundColour: "#f7f7f7" },
  id: "1",
  name: "CtaNewsletterModule"
});
