import { RadioList, RadioListProps } from "../Components/RadioLIst";

export default {
  title: "RadioList",
  component: RadioList,
  args: {
    id: "radioList",
    isRequired: true,
    label: "Radio List",
    sublabel: "Select a radio input",
    options: [
      { reactKey: "kCwnIj", value: "mango", display: "Mango" },
      { reactKey: "DnqlBr", value: "apple", display: "Apple" },
      { reactKey: "H7vPfc", value: "oranges", display: "Oranges" },
    ],
  },
  argTypes: {
    id: { control: "text" },
    isRequired: { control: "boolean" },
    label: { control: "text" },
    sublabel: { control: "text" },
    options: { control: "object" },
  },
};

export const Default = (args: RadioListProps) => <RadioList {...args} />;
