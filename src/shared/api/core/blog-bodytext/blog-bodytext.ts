import { BodyTextModule } from "@app/api/modules/body-text/body-text";
import { ISidebarComponentProps } from "@app/core/sidebar";
import { WordPressPostModule } from "@app/api/modules/wordpress-module/wordpress-module";

export class BlogBodyTextModule extends WordPressPostModule {
  public bodyText: BodyTextModule;
  public dateTime: string;
  public sidebarItems: ISidebarComponentProps;
}
