export const DateFormatter = {
  nbrb: (date: Date) => {
    const value = new Date(date);

    const day = value.getDate();
    let stringDay = day.toString();
    let month = value.getMonth() + 1;
    let stringMonth = month.toString();
    const year = value.getFullYear();

    if (day < 10) {
      stringDay = `0${day}`;
    }

    if (month < 10) {
      stringMonth = `0${month}`;
    }

    return `${year}-${stringMonth}-${stringDay}`;
  },
};
