import { IShareSocialComponent } from "./share-social.module";

const webbioURL = "https://www.webbio.nl";
const titleSharing = "BlackFriday";
export const socialMediaButtons: IShareSocialComponent = {
  facebook: { url: webbioURL, title: titleSharing, nameSocialShare: "Facebook" },
  twitter: {
    url: webbioURL,
    title: titleSharing,
    via: "BlackFriday",
    hashtags: ["BlackFriday", "Netherlands", "Sale", "Shops"],
    nameSocialShare: "Twitter"
  },
  email: {
    url: webbioURL,
    subject: titleSharing,
    nameSocialShare: "Email"
  },
  whatsapp: {
    url: webbioURL,
    separator: " - ",
    title: titleSharing,
    nameSocialShare: "WhatsApp"
  }
};
