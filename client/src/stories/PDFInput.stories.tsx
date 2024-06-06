import { PDFInputComponent, PdfInputProp } from "../Components/PDFInput";

export default {
  title: "Pdf Input",
  component: PDFInputComponent,
  args: {
    id: "pdfinput",
    isRequired: false,
    label: "pdf picker",
    sublabel: "Select pdf file",
  },
  argTypes: {
    sublabel: { control: "text" },
    isRequired: { control: "boolean" },
  },
};

export const Default = (args: PdfInputProp) => <PDFInputComponent {...args} />;
