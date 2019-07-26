import { Link } from "../link";
import { WordPressPostModule } from "@app/api/modules/wordpress-module/wordpress-module";

export class BlogSingleHeaderModule extends WordPressPostModule {
  public button: Link;
  public image: string;
  public links: Link[];
  public title: string;
}
