const breakPointMobile = 768;
export const detectView = (width: number): boolean => (width < breakPointMobile ? true : false);
