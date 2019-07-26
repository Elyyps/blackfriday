import { FilterBar } from "./filter-bar";
import { generateDummyCheckboxArray } from "../checkbox";

export const generateDummyFilterBar = (): FilterBar => ({
  status: [
    { text: "Actie nog onbekend", isChecked: false, label: 12 },
    { text: "Actie start over 5 dagen!", isChecked: false, label: 12 },
    { text: "Nu geldig", isChecked: false, label: 3 },
    { text: "Bijna Verlopen!", isChecked: false, label: 3 },
    { text: "Actie verlopen", isChecked: false, label: 3 }
  ],
  categories: [
    { text: "Audio", isChecked: false, label: 12 },
    { text: "Electronic", isChecked: false, label: 3 },
    { text: "Sport", isChecked: false, label: 20 },
    { text: "Mode", isChecked: false, label: 2 },
    { text: "Games", isChecked: false, label: 9 }
  ],
  brands: generateDummyCheckboxArray(),
  brandFilterTitle: "Brands",
  categoryFilterTitle: "Categories",
  sortByFilterTitle: "Sorted by",
  statusFilterTitle: "Status",
  sortBy: ["Newest", "Relevant", "Price"]
});
export const generateEmptyDummyFilterBar = (): FilterBar => ({
  status: [{ text: "", isChecked: false, label: 0 }],
  categories: [{ text: "", isChecked: false, label: 12 }],
  brands: [{ text: "", label: 0 }],
  brandFilterTitle: "",
  categoryFilterTitle: "",
  sortByFilterTitle: " ",
  statusFilterTitle: "",
  sortBy: [""]
});
