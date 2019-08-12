import { WordPressPostModule } from "@app/api/modules/wordpress-module/wordpress-module";
import { IBreadcrumbComponentProps } from "@app/core/breadcrumb";

export class BlogSingleHeaderModule extends WordPressPostModule {
  public breadcrumbProps: IBreadcrumbComponentProps;
  public image: string;
  public title: string;
}
