import { generateDummyCheckboxArray, Checkbox } from "./checkbox";

export class FilterBar {
  public brands: Checkbox[];
  public categories: string[];
  public sortBy: string[];
  public status: string[];
}

export const generateDummyFilterBar = (): FilterBar => ({
  status: ["Stock", "out", "unlimited"],
  categories: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
  brands: generateDummyCheckboxArray(),
  sortBy: ["New", "Relevant"]
});
