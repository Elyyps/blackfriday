import { WordPressPostModule } from "../wordpress-module/wordpress-module";

export class CtaSmallModule extends WordPressPostModule {
  public buttonClick?: () => void;
  public buttonTitle?: string;
  public icon?: any;
  public text?: string;
}
