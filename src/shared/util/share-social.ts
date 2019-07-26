export const shareSocialNative = (title: string, text: string) => {
  const navigatorInstance: any = navigator;
  if (navigatorInstance.share) {
    navigatorInstance
      .share({
        title,
        text,
        url: window.location.href
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
