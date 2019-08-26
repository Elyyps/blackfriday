import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { Banner } from "@app/api/core/banner/banner";

export class BannerModule extends WordPressPostModule {
  public bannerComponentProps: Banner;
}
