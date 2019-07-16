import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { ImageType, BannerVariant } from "@app/core/banner";

export class BannerModule extends WordPressPostModule {
  public buttonLink?: any;
  public buttonTitle?: string;
  public image?: ImageType;
  public label?: string;
  public logo?: ImageType;
  public text?: any;
  public title?: string;
  public variant?: BannerVariant;
}
