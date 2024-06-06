// VideoInput

import { VideoInputProp, VideoInputs } from "../Components/VideoInput";

export default {
  title: "VideoInputs",
  component: VideoInputs,
  args: {
    id: "video",
    isRequired: true,
    sublabel: "Select video",
  },
  argTypes: {
    id: { control: "text" },
    isRequired: { control: "boolean" },
    invert: { control: "boolean" },
  },
};

export const VideoInput = (args: VideoInputProp) => <VideoInputs {...args} />;
