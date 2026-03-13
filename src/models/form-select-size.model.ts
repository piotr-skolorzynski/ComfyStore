const FormSelectSize = {
  Xs: "select-xs",
  Sm: "select-sm",
  Md: "select-md",
  Lg: "select-lg",
  Xl: "select-xl",
} as const;

export type FormSelectSize =
  (typeof FormSelectSize)[keyof typeof FormSelectSize];
