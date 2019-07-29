import { Checkbox } from "../checkbox";

export class FilterBar {
  public brandFilterPlaceholder: string;
  public brandFilterTitle: string;
  public brands: Checkbox[];
  public categories: Checkbox[];
  public categoryFilterPlaceholder: string;
  public categoryFilterTitle: string;
  public sortBy: string[];
  public sortByFilterTitle: string;
  public status: Checkbox[];
  public statusFilterTitle: string;
}
