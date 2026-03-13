const LoadingSize = {
  Xs: "loading-xs",
  Sm: "loading-sm",
  Md: "loading-md",
  Lg: "loading-lg",
  Xl: "loading-xl",
} as const;

export type LoadingSize = (typeof LoadingSize)[keyof typeof LoadingSize];
