export interface StrapiErrorResponse {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
    details: Record<string, unknown>;
  };
}
