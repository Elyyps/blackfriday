import { BlogPost } from "@app/api/core/blog-post/blog-post";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";

export class FeaturedBlogModule extends WordPressPostModule {
  public items: BlogPost[];
  public title: string;
}
