import type { FormSelectSize } from "../models";

interface IFormSelectProps {
  label: string;
  name: string;
  options: string[];
  defaultValue?: string;
  size?: FormSelectSize;
}

const FormSelect = ({
  label,
  name,
  options,
  defaultValue,
  size = "select-sm",
}: IFormSelectProps) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend capitalize">{label}</legend>
      <select
        name={name}
        defaultValue={defaultValue}
        className={`select select-bordered ${size}`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="label">Optional</span>
    </fieldset>
  );
};

export default FormSelect;
