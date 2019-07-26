import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { BannerComponent } from "@app/api/core/banner/banner";

export class BannerModule extends WordPressPostModule {
  public bannerComponentProps: BannerComponent;
}
