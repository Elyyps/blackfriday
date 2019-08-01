export const shareSocialNative = (title: string, text: string, url: string) => {
  const navigatorInstance: any = navigator;
  if (navigatorInstance.share) {
    navigatorInstance
      .share({
        title,
        text,
        url
      })
      .then(() => {
        alert("Successful callback");
      })
      .catch((err: any) => {
        alert("Error callback: ");
      });
  } else {
    alert("web share not supported");
  }
};
