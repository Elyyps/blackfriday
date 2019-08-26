import { Background } from "@app/api/core/background";
import { Curve } from "@app/api/core/curve";
import { Spacing } from "@app/api/core/padding";

export class WordPressPostModule {
  public background?: Background;
  public bottomMargin?: Spacing;
  public bottomPadding?: Spacing;
  public curve?: Curve;
  public id: string;
  public name: string;
  public topMargin?: Spacing;
  public topPadding?: Spacing;
}

export const mobileSpacing = {
  mobileSpacingLarge: 48,
  mobileSpacingMedium: 32,
  mobileSpacingSmall: 24,
  mobileSpacingXLarge: 64
};

export const desktopSpacing = {
  desktopSpacingLarge: 120,
  desktopSpacingMedium: 96,
  desktopSpacingSmall: 72,
  desktopSpacingXLarge: 144
};
