import { BLACK_FRIDAY_MONTH, BLACK_FRIDAY_DAY } from "@app/constants";

export const getBlackFridayYear = (): number => {
  let nextBlackFridayYear;
  const dateBlackFridayCurrentYear = new Date(new Date().getFullYear(), BLACK_FRIDAY_MONTH - 1, BLACK_FRIDAY_DAY);
  dateBlackFridayCurrentYear.setHours(0, 0, 0, 0);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  currentDate <= dateBlackFridayCurrentYear
    ? (nextBlackFridayYear = dateBlackFridayCurrentYear.getFullYear())
    : (nextBlackFridayYear = dateBlackFridayCurrentYear.getFullYear() + 1);

  return nextBlackFridayYear;
};
