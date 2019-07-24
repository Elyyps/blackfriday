import { IScreenSize, ViewType } from "@app/stores/settings";

export const breakPointMobile = 360;
export const breakPointTablet = 769;
export const breakPointDesktop = 960;
export const breakPointDesktopLarge = 1200;

export const isMobileView = (width: number): boolean => (width < breakPointMobile ? true : false);
export const isTabletView = (width: number): boolean => (width < breakPointTablet ? true : false);
export const isDesktopView = (width: number): boolean => (width < breakPointDesktop ? true : false);
export const isDesktopLargeView = (width: number): boolean => (width < breakPointDesktopLarge ? true : false);

export const getViewType = (width: number): IScreenSize => {
  if (width < breakPointMobile) {
    return {
      breakpointPixels: breakPointMobile,
      viewType: ViewType.Mobile
    };
  }
  if (width > breakPointMobile && width < breakPointTablet) {
    return {
      breakpointPixels: breakPointTablet,
      viewType: ViewType.Tablet
    };
  }
  if (width > breakPointTablet && width < breakPointDesktop) {
    return {
      breakpointPixels: breakPointDesktop,
      viewType: ViewType.Desktop
    };
  }

  return {
    breakpointPixels: breakPointDesktopLarge,
    viewType: ViewType.DesktopLarge
  };
};
