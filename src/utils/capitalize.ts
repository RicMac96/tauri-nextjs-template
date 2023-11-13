/**
 * Clears any property with empty string
 * @param {String} text
 * @returns {String}
 */
export default function capitalizeText(text: string) {
  // Split the text into words
  const words = text.split(' ');

  // Capitalize the first character of each word and make the rest lowercase
  const capitalizedWords = words.map((word: string) => {
    // Handle empty strings or single characters
    if (word.length <= 1) {
      return word.toUpperCase();
    }

    // Capitalize the first character and make the rest lowercase
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the words back together with spaces
  return capitalizedWords.join(' ');
}
