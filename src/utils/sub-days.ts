export const subDays = (date: Date, days: number) => {
  return new Date(date.setDate(new Date().getDate() - days));
};
