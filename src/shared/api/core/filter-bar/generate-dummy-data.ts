import { FilterBar } from "./filter-bar";
import { generateDummyCheckboxArray } from "../checkbox";

export const generateDummyFilterBar = (): FilterBar => ({
  status: [
    { text: "Actie nog onbekend", isChecked: false, quantity: 12 },
    { text: "Actie start over 5 dagen!", isChecked: false, quantity: 12 },
    { text: "Nu geldig", isChecked: false, quantity: 3 },
    { text: "Bijna Verlopen!", isChecked: false, quantity: 3 },
    { text: "Actie verlopen", isChecked: false, quantity: 3 }
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
