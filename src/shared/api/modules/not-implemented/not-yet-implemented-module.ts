import { WordPressPostModule } from "../wordpress-module/wordpress-module";

export class NotYetImplemented extends WordPressPostModule {
  public moduleName: string;
}

export const generateNotYetImplemented = (moduleName: string): NotYetImplemented => ({
  id: "1",
  bottomMargin: { mobileSpacing: 24, desktopSpacing: 48 },
  topMargin: { mobileSpacing: 24, desktopSpacing: 48 },
  name: "notYetImplemented",
  moduleName
});
