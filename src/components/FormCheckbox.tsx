import type { FormCheckboxSize } from "../models";

interface IFormCheckboxProps {
  label: string;
  name: string;
  size?: FormCheckboxSize;
  defaultValue?: boolean;
}

const FormCheckbox = ({
  label,
  name,
  defaultValue = false,
  size = "checkbox-sm",
}: IFormCheckboxProps) => {
  return (
    <div className="flex flex-col gap-y-2 justify-center items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>

      <input
        type="checkbox"
        name={name}
        id={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};

export default FormCheckbox;
