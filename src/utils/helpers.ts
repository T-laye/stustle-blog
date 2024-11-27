

export function capitalizeWords(input: string) {
  return input?.replace(/\b\w/g, (char) => char?.toUpperCase());
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  // Define month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get parts of the date
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = date.getHours() >= 12 ? "pm" : "am";

  // Determine ordinal suffix for the day
  const ordinal = (n: number) => {
    if (n > 3 && n < 21) return "th"; // covers 11th–13th
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  // Format the date string
  return `${month} ${day}${ordinal(day)}, ${year} at ${hours}:${minutes}${ampm}`;
}

export const getRandomIndex = (length: number): number => {
  return Math.floor(Math.random() * length);
};

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

