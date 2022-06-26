export const isEmpty = (value: any) =>
  value === undefined || value === null || new String(value).length === 0;

export function createResponse(response_code: number, result: any, error: any, message: string) {
  let response = {
    error: false,
    message: 'There was some Internal Error',
    result: '-',
    response_code: 0,
  };
  response.error = error;
  response.response_code = response_code;
  response.result = result;
  response.message = message;
  return response;
}