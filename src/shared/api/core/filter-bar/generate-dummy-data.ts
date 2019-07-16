import { FilterBar } from "./filter-bar";
import { generateDummyCheckboxArray } from "../checkbox";

export const generateDummyFilterBar = (): FilterBar => ({
  status: [
    { text: "Actie nog onbekend", isChecked: false },
    { text: "Actie start over 5 dagen!", isChecked: false },
    { text: "Nu geldig", isChecked: false },
    { text: "Bijna Verlopen!", isChecked: false },
    { text: "Actie verlopen", isChecked: false }
  ],
  categories: [
    { text: "Audio", isChecked: false, quantity: 12 },
    { text: "Electronic", isChecked: false, quantity: 3 },
    { text: "Sport", isChecked: false, quantity: 20 },
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
export const generateEmptyDummyFilterBar = (): FilterBar => ({
  status: [{ text: "", isChecked: false }],
  categories: [{ text: "", isChecked: false, quantity: 12 }],
  brands: [{ text: "" }],
  brandFilterTitle: "",
  categoryFilterTitle: "",
  sortByFilterTitle: " ",
  statusFilterTitle: "",
  sortBy: [""]
});
