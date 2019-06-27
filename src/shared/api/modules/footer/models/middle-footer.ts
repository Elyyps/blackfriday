import { GroupLinks } from "./group-links";
import { Newsletter } from "@app/api/core/newsletter";
import { SocialBlock } from "./social-block";

export class MiddleFooter {
  public links: GroupLinks[];
  public newsletter: Newsletter;
  public socialMedia: SocialBlock;
}
