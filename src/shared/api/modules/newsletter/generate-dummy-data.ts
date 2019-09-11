import { NewsletterModule } from "./newsletter";

export const generateDummyNewsletterModule = (): NewsletterModule => ({
  id: "1",
  name: "NewsletterModule",
  modalTitle: "Inschrijven nieuwsbrief",
  items: [
    {
      text: "Apple",
      id: 0
    },
    {
      text: "Cosmetica & Parfum",
      id: 1
    },
    {
      text: "Gaming",
      id: 2
    },
    {
      text: "Sport & Vrije tijd",
      id: 3
    },
    {
      text: "Computer & Elektronica",
      id: 4
    },
    {
      text: "Fashion",
      id: 5
    },
    {
      text: "Speelgoed",
      id: 6
    },
    {
      text: "Wonen & koken",
      id: 7
    }
  ],
  text: "Op de hoogte blijven? Meld je dan aan!"
});
