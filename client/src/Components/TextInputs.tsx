export interface TextInputProp {
  label: string;
  isRequired: boolean;
  placeholder: string;
}
import "./TextInput.css";
import "./commonstyle/common.css";
export function TextInputs({ label, isRequired, placeholder }: TextInputProp) {
  return (
    <div className="inputBox ">
      <label htmlFor="">{label}</label>
      <input type="text" placeholder={placeholder} required={isRequired} />
    </div>
  );
}
