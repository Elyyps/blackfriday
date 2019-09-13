import IconDefault from "@assets/icons/send.svg";
import { CtaNewsletterModule } from "./cta-newsletter.module";
import { generateDummyNewsletterModule } from "../newsletter/generate-dummy-data";

export const generateCtaNewsLetterModule = (): CtaNewsletterModule => ({
  buttonTitle: "Meld je aan",
  text: "Op de hoogte blijven? Meld je dan aan voor onze nieuwsbrief!",
  icon: IconDefault,
  bottomPadding: { desktopSpacing: 72, mobileSpacing: 48 },
  background: { backgroundColour: "#f7f7f7" },
  id: "1",
  newsletterItems: generateDummyNewsletterModule().items,
  name: "CtaNewsletterModule",
  modalTitle: "Inschrijven nieuwsbrief"
});
