const breakPointMobile = 360;
const breakPointTablet = 769;
const breakPointDesktop = 960;
const breakPointDesktopLarge = 1200;

export const isMobileView = (width: number): boolean => (width < breakPointMobile ? true : false);
export const isTabletView = (width: number): boolean => (width < breakPointTablet ? true : false);
export const isDesktopView = (width: number): boolean => (width < breakPointDesktop ? true : false);
export const isDesktopLargeView = (width: number): boolean => (width < breakPointDesktopLarge ? true : false);
