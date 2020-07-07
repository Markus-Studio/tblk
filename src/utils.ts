/**
 * Split a string to a tuple of its leading white space and the rest.
 * 
 * @param data The input text.
 */
export function splitLeadingBlank(data: string): [string, string] {
  const tmp = data.match(/^(\s*)(.*)$/)!;
  return [tmp[1], tmp[2]];
}
