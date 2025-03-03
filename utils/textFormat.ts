export const capitalize = (text: string): string => {
  return text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "";
};

export const truncateText = (text: string, length: number): string => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};
