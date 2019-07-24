import { BlogPost } from "@app/api/core/blog-post/blog-post";
import { ArrowPanel } from "@app/api/core/arrow-panel";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";

export class BlogOverviewModule extends WordPressPostModule {
  public banner?: any;
  public items?: ArrowPanel[];
  public posts: BlogPost[];
}
