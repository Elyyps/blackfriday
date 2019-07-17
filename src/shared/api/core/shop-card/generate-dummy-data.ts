import { ShopCard } from "./shop-card";

export const generateDummyShopCards = (): ShopCard[] => {
  const data: ShopCard[] = [];
  for (let i = 0; i < 200; i++) {
    data.push({
      button: { title: "button", url: "" },
      content: "content",
      picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/shopCards/1.png",
      seeMore: { title: "button", url: "" },
      timeLeftBar: { text: "", value: 5 },
      title: "title " + i,
      category: "audio",
      brand: "coolblue"
    });
  }

  return data;
};
export const generateEmptyDummyShopCards = (): ShopCard[] => [
  {
    button: { title: "", url: "" },
    content: "",
    picture: "",
    seeMore: { title: "", url: "" },
    timeLeftBar: { text: "", value: 5 },
    title: " ",

    category: "",
    brand: ""
  }
];

export function generateData(): ShopCard[] {
  const data = [];
  const brand = ["jbl", "adidas", "guess", "converse", "only"];
  const category = ["audio", "sport", "mode", "games", "electronic"];
  const status = ["Actie nog onbekend", "Actie start over 5 dagen!", "Nu geldig", "Bijna Verlopen!", "Actie verlopen"];
  for (let y = 0; y < 5; y++) {
    for (let i = 1; i <= 5; i++) {
      const number16 = Math.floor(Math.random() * (1 - 0)) + 0;

      const timebar = Math.random();

      data.push({
        button: { title: "Naar deals", url: "" },
        content: "content" + i,
        picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/shopCards/" + i + ".png",
        seeMore: { title: "Meer info", url: "" },
        timeLeftBar: { text: status[y], value: timebar },
        title: "Item n: " + i,
        category: category[y],
        brand: brand[y]
      });
    }
  }

  return data;
}
