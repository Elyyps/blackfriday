import { ShopCard } from "./shop-card";
import { generateFilterBarData } from "../filter-bar/endpoint";

export const generateDummyShopCards = (): ShopCard[] => {
  const data: ShopCard[] = [];
  const numberOfCard = 100;
  for (let i = 0; i < numberOfCard; i += 1) {
    data.push({
      button: { title: "button", url: "" },
      content: "content",
      picture: "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/shopCards/1.png",
      seeMore: { title: "button", url: "" },
      timeLeftBar: { text: "", value: 5 },
      title: "title ",
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

export const generateData = (): ShopCard[] => {
  const data = [];
  const fiveConst = 5;
  const brand = ["jbl", "adidas", "guess", "converse", "only"];
  const category = ["audio", "sport", "mode", "games", "electronic"];
  const status = ["Actie nog onbekend", "Actie start over 5 dagen!", "Nu geldig", "Bijna Verlopen!", "Actie verlopen"];
  for (let y = 0; y < fiveConst; y += 1) {
    for (let i = 1; i <= fiveConst; i += 1) {
      const timebar = Math.random();

      data.push({
        button: { title: "Naar deals", url: "" },
        content: "content",
        picture: `https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/shopCards/${i}.png`,
        seeMore: { title: "Meer info", url: "" },
        timeLeftBar: { text: status[y], value: timebar },
        title: "Item n: ",
        category: category[y],
        brand: brand[y]
      });
    }
  }

  return data;
};
export const generateDemoDummyData = (): ShopCard[] => {
  const data: ShopCard[] = [];
  const brand = ["Appel", "Adidas", "Converse", "Guess", "JBL", "Only", "Test1", "Test2", "Test3"];
  const status = ["Actie nog onbekend", "Actie start over 5 dagen!", "Nu geldig", "Bijna Verlopen!", "Actie verlopen"];
  const content = [
    "Sint aanbiedingen: -30% op heel veel mooie merken!",
    "Een selectie van bizarre vele aanbiedingen.",
    "Een selectie van bizarre vele aanbiedingen. Meer info",
    "Een selectie van bizarre vele aanbiedingen. Meer info",
    "Een selectie van bizarre vele aanbiedingen"
  ];
  const filterBarData = generateFilterBarData();
  const fiveConst = 5;
  for (let a = 0; a < filterBarData.categories.length; a += 1) {
    for (let b = 0; b < filterBarData.categories[a].label; b += 1) {
      const image = Math.floor(Math.random() * (fiveConst - 0)) + 0;
      const brands = Math.floor(Math.random() * (fiveConst - 0)) + 0;

      data.push({
        button: { title: "Naar deals", url: "" },
        content: content[brands],
        picture: `https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/shopCards/${image}.png`,
        seeMore: { title: "Meer info", url: "" },
        timeLeftBar: { text: status[brands], value: brands / fiveConst },
        title: brand[brands],
        category: filterBarData.categories[a].text,
        brand: brand[brands]
      });
    }
  }

  return data;
};
