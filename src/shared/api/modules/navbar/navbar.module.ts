import { Link } from "@app/api/core/link";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";

export interface INavBarModule extends WordPressPostModule {
  closeText: string;
  label: string;
  links: Link[];
  logo: string;
}
