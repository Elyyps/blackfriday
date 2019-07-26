import { WordPressPostModule } from "@app/api/modules/wordpress-module/wordpress-module";
import { Link } from "@app/api/core/link";

export class BlogSingleHeaderModule extends WordPressPostModule {
  public button: Link;
  public image: string;
  public links: Link[];
  public title: string;
}
