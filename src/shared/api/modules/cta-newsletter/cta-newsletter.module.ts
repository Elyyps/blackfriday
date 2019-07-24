import { WordPressPostModule } from "../wordpress-module/wordpress-module";

export class CtaNewsletterModule extends WordPressPostModule {
  public buttonTitle?: string;
  public icon?: any;
  public text?: string;
}
