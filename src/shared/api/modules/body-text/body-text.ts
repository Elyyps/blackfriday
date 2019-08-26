import { WordPressPostModule } from "../wordpress-module/wordpress-module";

export class BodyTextModule extends WordPressPostModule {
  public containerAlignment: string;
  public containerSize: string;
  public html: string;
  public style?: object;
}
