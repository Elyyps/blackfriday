import { WordPressPostModule } from "../wordpress-module/wordpress-module";

export class CtaSmallModule extends WordPressPostModule {
  public buttonLink?: string;
  public buttonTitle?: string;
  public icon?: any;
  public text?: string;
}
