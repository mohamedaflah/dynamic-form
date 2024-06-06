import { DatePickerComponent, DatePickerProp } from "../Components/DatePicker";

export default {
  title: "DatePicker",
  component: DatePickerComponent,
  args: {
    id: "date",
    isRequired: false,
    label: "date picker",
    sublabel: "Select a date",
  },
  argTypes: {
    sublabel: { control: "text" },
    isRequired: { controle: "boolean" },
  },
};

export const Default = (args: DatePickerProp) => (
  <DatePickerComponent {...args} />
);
// export interface DatePickerProp {
//     isRequired: boolean;
//     id: string;
//     label: string;
//     sublabel: string;
//   }
