const checkStringLength = (text: string, max: number) => {
  if (text && max) {
    if (text.length >= max) {
      return text.slice(0, max).concat("...");
    }
  }

  return text;
};
export { checkStringLength };
