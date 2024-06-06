export interface DatePickerProp {
  isRequired: boolean;
  id: string;
  label: string;
  sublabel: string;
}
export const DatePickerComponent = ({ sublabel,isRequired,id,label }: DatePickerProp) => {
  return (
    <div className="w-full min-h-12 flex flex-col">
      <label htmlFor={id}>{sublabel}</label>
      <input type="date" name={label} id={id} className=" border p-2 rounded-md bg-slate-100" required={isRequired} />
    </div>
  );
};
