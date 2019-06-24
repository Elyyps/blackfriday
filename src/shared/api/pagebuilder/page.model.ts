import { WordPressPostModule } from "../modules/wordpress-module/wordpress-module";
import { MetaData } from "./meta-data";

export class PageModel {
  public id: string;

  public route: string;

  public wordPressPostModules: WordPressPostModule[];

  public metaData: MetaData;
}
