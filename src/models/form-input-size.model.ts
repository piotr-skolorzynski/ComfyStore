const FormInputSize = {
  Xs: "input-xs",
  Sm: "input-sm",
  Md: "input-md",
  Lg: "input-lg",
  Xl: "input-xl",
} as const;

export type FormInputSize = (typeof FormInputSize)[keyof typeof FormInputSize];
