export const trimText = (text: string, maxCharacters: number, truncateString = "...", keepFullWords = false) => {
  const trimmedText = text.trim();
  if (trimmedText.length > maxCharacters) {
    if (keepFullWords) {
      let trimmedSentence = "";

      const wordArray = trimmedText.split(" ");

      for (let index = 0; index < wordArray.length; index += 1) {
        const word = wordArray[index];

        const newSentence = `${trimmedSentence} ${word}`;

        if (newSentence.length + truncateString.length < maxCharacters) {
          trimmedSentence = newSentence;
        } else {
          return trimmedSentence.concat(truncateString);
        }
      }
    } else {
      return trimmedText.slice(0, maxCharacters).concat(truncateString);
    }
  }

  return trimmedText;
};
