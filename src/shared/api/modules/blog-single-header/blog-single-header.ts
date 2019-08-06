import { WordPressPostModule } from "@app/api/modules/wordpress-module/wordpress-module";
import { Link } from "@app/api/core/link";
import { BlogPost } from "@app/api/core/blog-post/blog-post";

export class BlogSingleHeaderModule extends WordPressPostModule {
  public button: Link;
  public image: string;
  public items?: BlogPost[];
  public links: Link[];
  public title: string;
}
