import { IFacebookShare } from "./facebook-social.module";
import { ITwitterShare } from "./twitter-social.module";
import { IWhatsappShare } from "./whats-app-social.module";
import { IMailShare } from "./mail-social.module";

export interface IShareSocialComponent {
  email?: IMailShare;
  facebook?: IFacebookShare;
  twitter?: ITwitterShare;
  whatsapp?: IWhatsappShare;
}
