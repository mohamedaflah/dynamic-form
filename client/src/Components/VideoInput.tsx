import { CloudUploadIcon, LucideTrash, Recycle } from "lucide-react";
import { useRef, useState } from "react";

export interface VideoInputProp {
  id: string;
  isRequired: boolean;
  sublabel: string;
}

export const VideoInputs = ({ id, isRequired, sublabel }: VideoInputProp) => {
  const [video, setVideo] = useState<File>();
  const labelRef = useRef<HTMLLabelElement>(null);
  return (
    <div
      className="w-full  bg-slate-100 border rounded-md flex items-center justify-center relative "
      style={{
        height: 300,
        justifyContent: "center",
        background: "rgb(241 245 249/1)",
        position: "relative",
      }}
    >
      <>
        <label
          htmlFor={id}
          ref={labelRef}
          className="flex gap-2 cursor-pointer"
          style={{
            background: "white",
            padding: "4px 10px",
            borderRadius: 5,
            fontSize: 15,
            display: video ? "none" : "flex",
          }}
        >
          {sublabel} <CloudUploadIcon width={17} />
        </label>
      </>

      <input
        type="file"
        className="hidden"
        required={isRequired}
        id={id}
        accept="video/*"
        onChange={(e) => setVideo(e?.target?.files?.[0])}
      />
      {video && (
        <>
          <video
            autoPlay
            controls
            muted={false}
            src={URL.createObjectURL(video)}
            style={{
              width: "90%",
              height: "90%",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          ></video>
        </>
      )}
      {video && (
        <>
          <div
            className="absolute right-3 bottom-3 w-11 h-56 "
            style={{
              position: "absolute",
              right: 10,
              bottom: 10,
              height: 100,
              width: 40,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "end",
              gap: "10px",
            }}
          >
            <div
              className=" bg-white"
              style={{
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
                border: "1px solid grey",
                cursor: "pointer",
              }}
              onClick={() => setVideo(undefined)}
            >
              <LucideTrash width={17} />
            </div>
            <div
              className=" bg-white"
              style={{
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
                border: "1px solid grey",
                cursor: "pointer",
              }}
              onClick={() => labelRef.current?.click()}
            >
              <Recycle width={17} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
