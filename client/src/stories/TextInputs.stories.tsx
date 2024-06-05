import { TextInputProp, TextInputs } from "../Components/TextInputs";

export default {
  title: "TextInputs",
  component: TextInputs,
  args: {
    label: "name",
    isRequired: true,
    placeholder: "Enter your name",
  },
  argTypes: {
    label: { control: "text" },
    isRequired: { control: "boolean" },
    placeholder: { controle: "text" },
  },
};

export const TextInput = (args: TextInputProp) => <TextInputs {...args} />;
