export interface IMobileFilterItem {
  clearFilterText?: string;
  hasSearchBar: boolean;
  isSingleSelection?: boolean;
  items: string[];
  searchBarPlaceholder?: string;
  selectedItems: string[];
  title: string;
}
