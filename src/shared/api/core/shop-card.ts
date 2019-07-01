import { TimeLeftBar } from "./time-left-bar";
import { Link } from "./link";

export class ShopCard {
  public brand?: string;
  public button: Link;
  public category?: string;
  public content: string;
  public picture: string;
  public postedAt?: string;
  public seeMore: Link;
  public timeLeftBar: TimeLeftBar;
  public title: string;
}
export const generateDummyStoresOverview = (): ShopCard => ({
  button: { title: "button", url: "" },
  content: "content",
  picture:
    "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/shopCards/1.png",
  seeMore: { title: "button", url: "" },
  timeLeftBar: { text: "", value: 5 },
  title: "title ",
  postedAt: "27/05/1995",
  category: "fdsfds",
  brand: "coolblue"
});
export function generateData(): ShopCard[] {
  const data = [];
  const brand = ["coolblue", "nike", "bol", "ziggo", "nike"];
  const category = ["A", "B", "C", "D", "E"];

  const status = [
    "Actie nog onbekend",
    "Actie start over 5 dagen!",
    "Nu geldig",
    "Bijna Verlopen!",
    "Actie verlopen"
  ];
  for (let y = 0; y < 5; y++) {
    for (let i = 1; i <= 5; i++) {
      data.push({
        button: { title: "button" + i, url: "" },
        content: "content" + i,
        picture:
          "https://viper-development-images.s3-eu-west-1.amazonaws.com/blackFriday/shopCards/" +
          i +
          ".png",
        seeMore: { title: "button" + i, url: "" },
        timeLeftBar: { text: status[i], value: 5 },
        title: "title " + i,
        postedAt: "27/05/1995",
        category: category[i],
        brand: brand[i]
      });
    }
  }

  return data;
}
