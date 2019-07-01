import { TimeLeftBar } from "./time-left-bar";
import { Link } from "./link";

export class ShopCard {
  public button: Link;
  public content: string;
  public picture?: string;
  public seeMore: Link;
  public timeLeftBar: TimeLeftBar;
  public title: string;
}
