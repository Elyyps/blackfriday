import { Background } from "@app/api/core/background";
import { Curve } from "@app/api/core/curve";
import { Padding } from "@app/api/core/padding";

export class WordPressPostModule {
  public background?: Background;
  public bottomMargin: string;
  public bottomPadding?: Padding;
  public curve?: Curve;
  public id: string;
  public name: string;
  public topMargin: string;
  public topPadding?: Padding;
}

export const paddingMobile = {
  mobilePaddingLarge: 48,
  mobilePaddingMedium: 32,
  mobilePaddingSmall: 24,
  mobilePaddingXLarge: 64
};

export const paddingDesktop = {
  desktopPaddingLarge: 120,
  desktopPaddingMedium: 96,
  desktopPaddingSmall: 72,
  desktopPaddingXLarge: 144
};
