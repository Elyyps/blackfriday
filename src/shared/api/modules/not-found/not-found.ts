import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { Link } from "@app/api/core/link";

export class NotFoundModule extends WordPressPostModule {
  public button: Link;
  public content: string;
  public errorCode: number;
  public tilte: string;
}
