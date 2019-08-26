export class Checkbox {
  public isChecked?: boolean;
  public label: number;
  public text: string;
}
export const generateDummyCheckboxArray = (): Checkbox[] => [
  {
    label: 0,
    text: "Appel ",
    isChecked: false
  },
  {
    label: 255,
    text: "Adidas",
    isChecked: false
  },
  {
    label: 22,
    text: "Converse",
    isChecked: false
  },
  {
    label: 12,
    text: "Guess",
    isChecked: false
  },
  {
    label: 2,
    text: "JBL",
    isChecked: false
  },
  {
    label: 25,
    text: "Only",
    isChecked: false
  },
  {
    label: 0,
    text: "Test1 ",
    isChecked: false
  },
  {
    label: 255,
    text: "Test2",
    isChecked: false
  },
  {
    label: 22,
    text: "Test3",
    isChecked: false
  },
  {
    label: 12,
    text: "Test4",
    isChecked: false
  },
  {
    label: 2,
    text: "Test5",
    isChecked: false
  },
  {
    label: 25,
    text: "Test6",
    isChecked: false
  },
  {
    label: 12,
    text: "Test7",
    isChecked: false
  },
  {
    label: 2,
    text: "Test8",
    isChecked: false
  },
  {
    label: 25,
    text: "Test9",
    isChecked: false
  }
];
export const generateDummyCheckbox = (): Checkbox => ({
  label: 2,
  text: "fcdandige links"
});
