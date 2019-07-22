import { WordPressPostModule } from "../wordpress-module/wordpress-module";

export class NotYetImplemented extends WordPressPostModule {
  public moduleName: string;
}

export const generateNotYetImplemented = (moduleName: string): NotYetImplemented => ({
  id: "1",
  bottomMargin: "40px",
  topMargin: "40px",
  name: "notYetImplemented",
  moduleName
});
