import { useState } from "react";
import pdfImg from "../assets/pdf.png";
import { Eye, X } from "lucide-react";
export interface PdfInputProp {
  isRequired: boolean;
  id: string;
  label: string;
  sublabel: string;
}
export const PDFInputComponent = ({ id, sublabel }: PdfInputProp) => {
  const [pdf, setPdf] = useState<File>();
  return (
    <div className="border flex-col w-full rounded-md flex items-center justify-center p-3">
      <input
        type="file"
        id={id}
        className="hidden"
        accept=".pdf/*"
        onChange={(e) => setPdf(e.target.files?.[0])}
      />
      {!pdf && (
        <>
          <label
            htmlFor={id}
            className="h-10 px-4 bg-slate-100  flex items-center rounded-md cursor-pointer"
          >
            {sublabel}
          </label>
        </>
      )}
      {pdf && (
        <>
          <label
            htmlFor={id}
            className="h-10 gap-2 px-4 bg-slate-100  flex items-center rounded-md cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={pdfImg} className="w-5" alt="" />
            {pdf.name}
            <Eye
              className="w-5"
              onClick={() => {
                window.location.href = URL.createObjectURL(pdf);
              }}
            />
            <X className="w-5" onClick={() => setPdf(undefined)} />
          </label>
        </>
      )}
    </div>
  );
};
