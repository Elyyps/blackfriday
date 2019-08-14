export const trimText = (text: string, maxCharacters: number, truncateString = "...") => {
  let trimmedSentence = "";

  const wordArray = text.split(" ");

  for (let index = 0; index < wordArray.length; index += 1) {
    const word = wordArray[index];

    const newSentence = `${trimmedSentence} ${word}`;

    if (newSentence.length + truncateString.length < maxCharacters) {
      trimmedSentence = newSentence;
    } else {
      return trimmedSentence.concat(truncateString);
    }
  }
};
