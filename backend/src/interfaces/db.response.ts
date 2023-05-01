export interface dbRes<T = any> {
  err: any;
  data: T;
  count?: number;
  message?: any;
  statusCode?: number;
  meta?: any;
}
