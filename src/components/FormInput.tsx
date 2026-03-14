import type { FormInputSize } from "../models";

interface IFormInputProps {
  label: string;
  name: string;
  size?: FormInputSize;
  defaultValue?: string;
  type?: string;
}

const FormInput = ({
  label,
  name,
  size = "input-lg",
  defaultValue,
  type = "text",
}: IFormInputProps) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend capitalize">{label}</legend>
      <input
        type={type}
        className={`input ${size}`}
        defaultValue={defaultValue}
        name={name}
      />
    </fieldset>
  );
};

export default FormInput;
