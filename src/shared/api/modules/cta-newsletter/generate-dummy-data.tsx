import IconDefault from "@assets/icons/send.svg";
import { CtaNewsletterModule } from "./cta-newsletter.module";

export const generateCtaNewsLetterModule = (): CtaNewsletterModule => ({
  buttonTitle: "Meld je aan",
  text: "Op de hoogte blijven? Meld je dan aan voor onze nieuwsbrief!",
  icon: IconDefault,
  bottomMargin: "10px",
  topMargin: "0px",
  id: "1",
  name: "CtaNewsletterModule",
  modalTitle: "Inschrijven nieuwsbrief"
});
