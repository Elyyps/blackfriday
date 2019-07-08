import { generateDummyCheckboxArray, Checkbox } from "./checkbox";

export class FilterBar {
  public brandFilterTitle: string;
  public brands: Checkbox[];
  public categories: Checkbox[];
  public categoryFilterTitle: string;
  public sortBy: string[];
  public sortByFilterTitle: string;
  public status: Checkbox[];
  public statusFilterTitle: string;
}

export const generateDummyFilterBar = (): FilterBar => ({
  status: [
    { text: "Actie nog onbekend", isChecked: false },
    { text: "Actie start over 5 dagen!", isChecked: false },
    { text: "Nu geldig", isChecked: false },
    { text: "Bijna Verlopen!", isChecked: false },
    { text: "Actie verlopen", isChecked: false }
  ],
  categories: [
    { text: "Audio", isChecked: false, quantity: 255 },
    { text: "Electronic", isChecked: false, quantity: 0 },
    { text: "Sport", isChecked: true, quantity: 20 },
    { text: "Mode", isChecked: false, quantity: 2 },
    { text: "Games", isChecked: false, quantity: 51 }
  ],
  brands: generateDummyCheckboxArray(),
  brandFilterTitle: "Brands",
  categoryFilterTitle: "Categories",
  sortByFilterTitle: "Sorted by",
  statusFilterTitle: "Status",
  sortBy: ["Newest", "Relevant", "Price"]
});
