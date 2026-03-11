interface IFormInputProps {
  label: string;
  name: string;
  defaultValue: string;
  type: string;
}

const FormInput = ({
  label,
  name,
  defaultValue,
  type = "text",
}: IFormInputProps) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <input
        type={type}
        className="input"
        defaultValue={defaultValue}
        name={name}
      />
    </fieldset>
  );
};

export default FormInput;
