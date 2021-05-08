export interface ApiResponse<T> {
  result: T;
  page: number;
  total: number;
}
