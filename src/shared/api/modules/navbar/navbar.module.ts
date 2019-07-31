import { Link } from "@app/api/core/link";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { MenuItem } from "@app/api/core/menu-item/menu-item";

export class INavBarModule extends WordPressPostModule {
  public closeText: string;
  public hamburgerMenu: MenuItem[];
  public label: string;
  public links: Link[];
  public logo: string;
}
