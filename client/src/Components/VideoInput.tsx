import { CloudUploadIcon } from "lucide-react";

export interface VideoInputProp {
  id: string;
  isRequired: boolean;
  sublabel: string;
}

export const VideoInputs = ({ id, isRequired, sublabel }: VideoInputProp) => {
  return (
    <div
      className="w-full  bg-gray-300 border rounded-md flex items-center justify-center relative "
      style={{
        height: 300,
        justifyContent: "center",
        background: "whitesmoke",
        position: "relative",
      }}
    >
      <label
        htmlFor={id}
        className="flex gap-2 cursor-pointer"
        style={{
          background: "white",
          padding: "4px 10px",
          borderRadius: 5,
          fontSize: 15,
        }}
      >
        {sublabel} <CloudUploadIcon width={17} />
      </label>
      <input
        type="file"
        className="hidden"
        required={isRequired}
        id={id}
        accept="video/*"
      />
      <div
        className="absolute right-3 bottom-3 w-11 h-56 bg-black"
        style={{
          position: "absolute",
          right: 10,
          bottom: 10,
          height: 100,
          width: 30,
          display: "flex",
          flexDirection: "column",
          alignItems:"center",
          justifyContent:"end"
        }}
      >
        
      </div>
    </div>
  );
};
