export interface RadioOption {
  reactKey: string;
  value: string;
  display: string;
}

export interface RadioListProps {
  id: string;
  isRequired: boolean;
  label: string;
  sublabel: string;
  options: RadioOption[];
}
import { useState } from "react";
import "./commonstyle/common.css";

export function RadioList({
  sublabel,
  isRequired,
  options,
  id,
}: RadioListProps) {
  const [selectedRadio, setSelectedRadio] = useState<string | undefined>();
  return (
    <div className="w-full flex flex-col gap-1">
      <div className="flex justify-start">
        <label>{sublabel}</label>
        {isRequired && <span className="required">*</span>}
      </div>
      <div className="flex gap-3">
        {options?.map((option) => (
          <div className="flex items-center gap-1" key={option.reactKey}>
            <input
              type="radio"
              id={option.reactKey}
              name={id}
              value={option.value}
              className=""
              hidden
              onChange={(e) => setSelectedRadio(e.target.value)}
            />
            <label
              htmlFor={option.reactKey}
              className={`size-4 rounded-full p-[4px] cursor-pointer ${option.value==selectedRadio?"bg-blue-500":"bg-gray-700 "}`}
            >
              <div className={`w-full h-full  rounded-full ${option.value==selectedRadio?"bg-green-200":"bg-white"}`}>
                {/* <Verified className="w-2"/> */}
              </div>
            </label>
            <label htmlFor={option.reactKey} className="cursor-pointer">{option.display}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
