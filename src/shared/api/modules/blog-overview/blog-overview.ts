import { BlogPost } from "@app/api/core/blog-post/blog-post";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { ArrowPanel } from "@app/api/core/arrow-panel/arrow-panel";

export class BlogOverviewModule extends WordPressPostModule {
  public banner?: any;
  public items?: ArrowPanel[];
  public posts: BlogPost[];
}
