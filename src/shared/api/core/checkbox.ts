export class Checkbox {
  public isChecked?: boolean;
  public quantity?: number;
  public text: string;
}
export const generateDummyCheckboxArray = (): Checkbox[] => [
  {
    quantity: 0,
    text: "Appel ",
    isChecked: false
  },
  {
    quantity: 255,
    text: "Adidas",
    isChecked: false
  },
  {
    quantity: 22,
    text: "Converse",
    isChecked: false
  },
  {
    quantity: 12,
    text: "Guess",
    isChecked: false
  },
  {
    quantity: 2,
    text: "JBL",
    isChecked: false
  },
  {
    quantity: 25,
    text: "Only",
    isChecked: false
  },
  {
    quantity: 0,
    text: "Test1 ",
    isChecked: false
  },
  {
    quantity: 255,
    text: "Test2",
    isChecked: false
  },
  {
    quantity: 22,
    text: "Test3",
    isChecked: false
  },
  {
    quantity: 12,
    text: "Test4",
    isChecked: false
  },
  {
    quantity: 2,
    text: "Test5",
    isChecked: false
  },
  {
    quantity: 25,
    text: "Test6",
    isChecked: false
  },
  {
    quantity: 12,
    text: "Test7",
    isChecked: false
  },
  {
    quantity: 2,
    text: "Test8",
    isChecked: false
  },
  {
    quantity: 25,
    text: "Test9",
    isChecked: false
  }
];
export const generateDummyCheckbox = (): Checkbox => ({
  quantity: 2,
  text: "fcdandige links"
});
