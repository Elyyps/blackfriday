import { WordPressPostModule } from "@app/api/modules/wordpress-module/wordpress-module";
import { IBreadcrumbComponentProps } from "@app/core/breadcrumb";
import { BlogPost } from "@app/api/core/blog-post/blog-post";

export class BlogOverviewHeaderModule extends WordPressPostModule {
  public blogPosts?: BlogPost[];
  public breadcrumbProps: IBreadcrumbComponentProps;
  public title: string;
}
