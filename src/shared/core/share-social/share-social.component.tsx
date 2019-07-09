import * as React from "react";

import styles from "./share-social-component.module.scss";

import { IconComponent } from "@app/core/icon";
import FacebookSVG from "@assets/icons/facebook.svg";
import TwitterSVG from "@assets/icons/twitter.svg";
import MailSVG from "@assets/icons/mail.svg";
import WhatsApp from "@assets/icons/whatsapp.svg";

import { FacebookShareButton, TwitterShareButton, EmailShareButton, WhatsappShareButton } from "react-share";

import {
  IFacebookShare,
  ITwitterShare,
  IWhatsappShare,
  IMailShare,
  IShareSocialComponent
} from "@app/api/modules/share-social";

const getShareControl = (nameSocial: string | undefined, icon: string) => (
  <div className={styles["share__social-link"]}>
    <div className={styles["share__social-icon"]}>
      <IconComponent icon={icon} size="15px" />
    </div>
    <div className={styles["share__social-text"]}>
      <div className={styles["share__social-title"]}>{nameSocial}</div>
    </div>
  </div>
);

export const FacebookShareButtonComponent = (props: IFacebookShare) => (
  <FacebookShareButton hashtag={props.hashtag} quote={props.title} url={props.url}>
    {getShareControl(props.nameSocialShare, FacebookSVG)}
  </FacebookShareButton>
);

export const TwitterShareButtonComponent = (props: ITwitterShare) => (
  <TwitterShareButton via={props.via} title={props.title} url={props.url}>
    {getShareControl(props.nameSocialShare, TwitterSVG)}
  </TwitterShareButton>
);

export const MailShareButtonComponent = (props: IMailShare) => (
  <EmailShareButton subject={props.subject} body={props.title} url={props.url}>
    {getShareControl(props.nameSocialShare, MailSVG)}
  </EmailShareButton>
);
export const WhatsappShareButtonComponent = (props: IWhatsappShare) => (
  <WhatsappShareButton title={props.title} url={props.url}>
    {getShareControl(props.nameSocialShare, WhatsApp)}
  </WhatsappShareButton>
);

export const ShareSocialComponent = (props: IShareSocialComponent) => (
  <div className={styles["share"]}>
    {props.facebook && (
      <FacebookShareButtonComponent
        title={props.facebook.title}
        hashtag={props.facebook.hashtag[0] !== "#" ? "#".concat(props.facebook.hashtag) : props.facebook.hashtag}
        url={props.facebook.url}
        nameSocialShare={props.facebook.nameSocialShare}
      />
    )}
    {props.twitter && (
      <TwitterShareButtonComponent
        nameSocialShare={props.twitter.nameSocialShare}
        title={props.twitter.title}
        via={props.twitter.via}
        url={props.twitter.url}
      />
    )}
    {props.email && (
      <MailShareButtonComponent
        nameSocialShare={props.email.nameSocialShare}
        title={props.email.title}
        subject={props.email.subject}
        url={props.email.url}
      />
    )}
    {props.whatsapp && (
      <WhatsappShareButtonComponent
        nameSocialShare={props.whatsapp.nameSocialShare}
        title={props.whatsapp.title}
        separator={props.whatsapp.separator}
        url={props.whatsapp.url}
      />
    )}
  </div>
);
