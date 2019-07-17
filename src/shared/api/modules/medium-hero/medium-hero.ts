import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { IHeaderContentComponentProps } from "@app/core/header-content";
import { UspModule } from "@app/api/core/usp";

export class MediumHeroModule extends WordPressPostModule {
  headerContent?: IHeaderContentComponentProps;
  image?: string;
  usps: UspModule;
}
