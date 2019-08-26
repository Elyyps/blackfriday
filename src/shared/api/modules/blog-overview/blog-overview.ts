import { BlogPost } from "@app/api/core/blog-post/blog-post";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { Sidebar } from "@app/api/core/sidebar/sidebar";

export class BlogOverviewModule extends WordPressPostModule {
  public posts: BlogPost[];
  public sidebar: Sidebar;
}
