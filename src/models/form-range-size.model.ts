const FormRangeSize = {
  Xs: "range-xs",
  Sm: "range-sm",
  Md: "range-md",
  Lg: "range-lg",
  Xl: "range-xl",
} as const;

export type FormRangeSize = (typeof FormRangeSize)[keyof typeof FormRangeSize];
