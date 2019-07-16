export class Dropdown {
  public buttonVariant?: string;
  public orientation?: string;
  public title: string;
}

export const generateDummyDropdown1 = (): Dropdown => ({
  title: "Status",
  buttonVariant: "primary-brand",
  orientation: "bottom-left"
});
export const generateDummyDropdown2 = (): Dropdown => ({
  title: "Categories",
  buttonVariant: "secondary",
  orientation: "bottom-left"
});

export const generateDummyDropdown3 = (): Dropdown => ({
  title: "Brands",
  buttonVariant: "secondary",
  orientation: "bottom-left"
});
export const generateDummyDropdown4 = (): Dropdown => ({
  title: "Brands",
  buttonVariant: "secondary",
  orientation: "bottom-left"
});
