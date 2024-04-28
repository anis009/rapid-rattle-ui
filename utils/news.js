export function createSubstringWithWords(text, wordCount) {
  // Split the text into an array of words
  const words = text.split(" ");

  // Select the desired number of words from the array
  const selectedWords = words.slice(0, wordCount);

  // Join the selected words back into a string
  const substring = selectedWords.join(" ");

  return substring;
}

export function timeAgo(date) {
  const givenDate = new Date(date);
  const now = new Date();
  const diff = Math.abs(now - givenDate);
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  } else if (months > 0) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  } else if (days > 0) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (hours > 0) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (minutes > 0) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else {
    return "just now";
  }
}
