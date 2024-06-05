import { ImageInputs, ImageInputProp } from "../Components/ImageInput";

export default {
  title: "ImageInput",
  component: ImageInputs,
  args: {
    id: "imagefile",
    isRequired: true,
    invert: false,
  },
  argTypes: {
    id: { control: "text" },
    isRequired: { control: "boolean" },
    invert: { control: "boolean" },
  },
};

export const ImageInput = (args: ImageInputProp) => <ImageInputs {...args} />;
