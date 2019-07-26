import { GroupLinks } from "./group-links";
import { Newsletter } from "@app/api/core/newsletter";
import { SocialBlock } from "./social-block";
import { GoogleReviews } from "@app/api/core/google-reviews";

export class MiddleFooter {
  public googleReviews: GoogleReviews;
  public links: GroupLinks[];
  public modalTitle: string;
  public newsletter: Newsletter;
  public socialMedia: SocialBlock;
}
