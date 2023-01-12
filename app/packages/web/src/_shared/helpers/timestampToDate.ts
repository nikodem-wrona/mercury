export const timestampToDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
}
