import { generateDummyCheckboxArray, Checkbox } from "./checkbox";

export class FilterBar {
  public brandFilterTitle: string;
  public brands: Checkbox[];
  public categories: string[];
  public categoryFilterTitle: string;
  public sortBy: string[];
  public sortByFilterTitle: string;
  public status: string[];
  public statusFilterTitle: string;
}

export const generateDummyFilterBar = (): FilterBar => ({
  status: ["Stock", "out", "unlimited"],
  categories: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
  brands: generateDummyCheckboxArray(),
  sortBy: ["New", "Relevant"],
  brandFilterTitle: "Brands",
  categoryFilterTitle: "Categories",
  sortByFilterTitle: "Sorted by",
  statusFilterTitle: "Status"
});
