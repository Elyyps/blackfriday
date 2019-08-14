export const getStatusBarColor = (timeLeftPercentage: number) => {
  const rangeNumber = timeLeftPercentage;
  const limit = 50;
  if (rangeNumber === 0 || typeof rangeNumber === "undefined") {
    return "none";
  }

  if (rangeNumber <= limit) {
    return "orange";
  }

  return "green";
};
