export const shareSocialNative = (title: string, text: string, url?: string) => {
  const finalUrl = url ? url : window.location.href;
  const navigatorInstance: any = navigator;
  if (navigatorInstance.share) {
    navigatorInstance.share({
      title,
      text,
      url: finalUrl
    });
  } else {
    alert("web share not supported");
  }
};
