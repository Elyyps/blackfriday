import { Link } from "@app/api/core/link";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { GroupLinks } from "@app/api/core/group-links";

export interface INavBarModule extends WordPressPostModule {
  closeText: string;
  hamburgerMenu: Link[] | GroupLinks[];
  label: string;
  links: Link[];
  logo: string;
}
