import IconDefault from "@assets/icons/send.svg";
import { CtaNewsletterModule } from "./cta-newsletter.module";

export const generateCtaNewsLetterModule = (): CtaNewsletterModule => ({
  buttonTitle: "Meld je aan",
  text: "Op de hoogte blijven? Meld je dan aan voor onze nieuwsbrief!",
  icon: IconDefault,
  bottomPadding: { desktopSpacing: 72, mobileSpacing: 48 },
  background: { backgroundColour: "#f7f7f7" },
  id: "1",
  name: "CtaNewsletterModule",
  modalTitle: "Inschrijven nieuwsbrief"
});
