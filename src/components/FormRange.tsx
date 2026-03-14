import { useState } from "react";
import type { FormRangeSize } from "../models";
import { formatPrice } from "../utils";

interface IFormRangeProps {
  label: string;
  name: string;
  price: number;
  size?: FormRangeSize;
}

const FormRange = ({
  label,
  name,
  price,
  size = "range-sm",
}: IFormRangeProps) => {
  const step = 1000;
  const maxPrice = 100_000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  return (
    <div>
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        id={name}
        name={name}
        type="range"
        min={0}
        max={maxPrice}
        value={selectedPrice}
        className={`range range-primary ${size}`}
        step={step}
        onChange={(e) => setSelectedPrice(Number(e.target.value))}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max: {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

export default FormRange;
