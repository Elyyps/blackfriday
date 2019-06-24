import { Background } from "@app/api/core/background";
import { Curve } from "@app/api/core/curve";

export class Padding {
  public mobilePadding: number;
  public desktopPadding: number;
}
export class WordPressPostModule {
  public id: string;

  public name: string;

  public topMargin: string;

  public bottomMargin: string;

  // background, can be set as a pattern or color
  public background?: Background;

  public curve?: Curve;

  // padding must be one of the following object. Each object identifies a desktop and mobile size, SMALL, MEDIUM, LARGE
  public topPadding?: Padding;
  // padding must be one of the following object. Each object identifies a desktop and mobile size, SMALL, MEDIUM, LARGE
  public bottomPadding?: Padding;
}

export const paddingMobile = {
  mobilePaddingSmall: 24,
  mobilePaddingMedium: 32,
  mobilePaddingLarge: 48,
  mobilePaddingXLarge: 64
};

export const paddingDesktop = {
  desktopPaddingSmall: 72,
  desktopPaddingMedium: 96,
  desktopPaddingLarge: 120,
  desktopPaddingXLarge: 144
};
