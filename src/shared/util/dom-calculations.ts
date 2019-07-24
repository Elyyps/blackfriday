const getTextWidth = (text: string, fontSize: string, fontFace: string) => {
  if (typeof window !== "undefined") {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (context) {
      context.font = `${fontSize}px ${fontFace}`;
      const OFFSET = 14;

      return context.measureText(text).width + OFFSET;
    }
  }

  return 0;
};

export const getLabelWidth = (placeholder: string) => getTextWidth(placeholder, "16", "Assistant, sans-serif");
