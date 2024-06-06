export interface RadioOption {
  reactKey: string;
  value: string;
  display: string;
  isRequired: boolean;
}

export interface RadioListProps {
  id: string;
  isRequired: boolean;
  label: string;
  sublabel: string;
  options: RadioOption[];
}
import "./commonstyle/common.css";
export function RadioList({}: RadioListProps) {
  return (
    <div className="radio-box">
      <div className="header"></div>
      <div className="radios"></div>
    </div>
  );
}
