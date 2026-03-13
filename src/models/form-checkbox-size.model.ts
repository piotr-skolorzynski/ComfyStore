const FormCheckboxSize = {
  Xs: "checkbox-xs",
  Sm: "checkbox-sm",
  Md: "checkbox-md",
  Lg: "checkbox-lg",
  Xl: "checkbox-xl",
} as const;

export type FormCheckboxSize =
  (typeof FormCheckboxSize)[keyof typeof FormCheckboxSize];
