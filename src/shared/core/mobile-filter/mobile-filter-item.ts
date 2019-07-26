export interface IMobileFilterItem {
  hasSearchBar: boolean;
  isSingleSelection?: boolean;
  items: string[];
  searchBarPlaceholder?: string;
  selectedItems: string[];
  title: string;
}
