import { NewsletterModule } from "./newsletter";

export const generateDummyNewsletterModule = (): NewsletterModule => ({
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "NewsletterModule",
  modalTitle: "Inschrijven nieuwsbrief",
  text: "Op de hoogte blijven? Meld je dan aan!"
});
