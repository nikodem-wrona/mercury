export const stringToArray = (input: string): string[] => {
  return input.split(',').map((s) => s.trim());
}
