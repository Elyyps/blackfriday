import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { IBreadcrumbComponentProps } from "@app/core/breadcrumb";

export class HeaderInfo extends WordPressPostModule {
  public bgcolor: string;
  public breadcrumbProps: IBreadcrumbComponentProps;
  public content: string;
  public icon: string;
  public image: string;
  public title: string;
  public url: string;
}
