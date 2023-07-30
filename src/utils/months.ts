interface Dictionary<T> {
  [Key: string]: T;
}

const monthsEn: Dictionary<string> = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sept: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
};

const getMonths = (location: "en" | "pt" = "en") => {
  return location === "en" ? monthsEn : monthsEn;
};

export { getMonths };
