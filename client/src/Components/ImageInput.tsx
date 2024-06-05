export interface ImageInputProp {
  id: string;
  isRequired: boolean;
  invert: boolean;
}
import { Replace, Trash, UploadCloud } from "lucide-react";
import "./commonstyle/common.css";
import "./ImageInput.css";
import { useRef, useState } from "react";
export function ImageInputs({ invert, isRequired, id }: ImageInputProp) {
  const [image, setImage] = useState<File>();
  const labelRef = useRef<HTMLLabelElement>(null);
  return (
    <div className={`fileBox ${invert && "invert"}`}>
      <input
        type="file"
        required={isRequired}
        id={id}
        hidden
        onChange={(e) => {
          setImage(e?.target?.files?.[0]);
        }}
      />
      {image && (
        <>
          <img src={URL.createObjectURL(image)} alt="" className="InputImage" />
        </>
      )}
      {!image && (
        <>
          <label htmlFor={id}>
            Upload image <UploadCloud width={18} />
          </label>
        </>
      )}
      <label
        htmlFor={id}
        ref={labelRef}
        hidden
        style={{ display: "none" }}
      ></label>
      {image && (
        <>
          <div className="sideControl">
            <div
              className="icons"
              onClick={() => {
                setImage(undefined);
              }}
            >
              <Trash width={19} />
            </div>
            <div className="icons" onClick={() => labelRef.current?.click()}>
              <Replace width={19} />
            </div>
            {/* <Replace/> */}
          </div>
        </>
      )}
    </div>
  );
}
