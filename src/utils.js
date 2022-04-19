export const getMonthDiff = ({ startDate, endDate }) => {
  let months;
  months = (endDate?.year - startDate?.year) * 12;
  months -= startDate?.month;
  months += endDate?.month;
  return months <= 0 ? 0 : months;
}

export const hexToRGB = ({ hex, alpha }) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
}