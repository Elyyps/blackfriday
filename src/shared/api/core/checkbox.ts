export class Checkbox {
  public quantity?: number;
  public text: string;
}
export const generateDummyCheckboxArray = (): Checkbox[] => [
  {
    quantity: 2,
    text: "fcdandige links"
  },
  {
    quantity: 2,
    text: "fcdandige links"
  },
  {
    quantity: 2,
    text: "fcdandige links"
  },
  {
    quantity: 2,
    text: "fcdandige links"
  },
  {
    quantity: 2,
    text: "fcdandige links"
  },
  {
    quantity: 2,
    text: "fcdandige links"
  }
];
export const generateDummyCheckbox = (): Checkbox => ({
  quantity: 2,
  text: "fcdandige links"
});
