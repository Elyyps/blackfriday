import * as React from "react";
import styles from "./share-social-dropdown-component.module.scss";
import { Button } from "../button";
import { DropdownComponent } from "../dropdown/dropdown.component";
import { ShareSocialComponent } from "../share-social/share-social.component";
import { socialMediaButtons } from "@app/api/core/share-social/generate-dummy-data";
import { IShareSocialComponent } from "@app/api/core/share-social";
import { StarsRatingComponent } from "../stars-rating";
import { shareSocialNative } from "@app/util/share-social";

export interface IShareSocialDropdownComponentProps {
  buttonTitle: string;
  shareSocial: IShareSocialComponent;
}

const ShareSocialDropdownComponent = (props: IShareSocialDropdownComponentProps) => {
  const [isNativeSharingCompatible, setIsNativeSharingCompatible] = React.useState<boolean>(false);
  const { shareSocial, buttonTitle } = props;
  React.useEffect(() => {
    const navigatorInstance: any = navigator;
    setIsNativeSharingCompatible(navigatorInstance.share);
  }, []);

  const onClickHandler = () => {
    let title = "";
    let url = "";
    let content = "";

    if (shareSocial.facebook) {
      title = shareSocial.facebook.title;
      url = shareSocial.facebook.url;
    } else if (shareSocial.twitter) {
      title = shareSocial.twitter.title;
      url = shareSocial.twitter.url;
    } else if (shareSocial.email) {
      title = shareSocial.email.title;
      url = shareSocial.email.url;
      if (shareSocial.email.subject) content = shareSocial.email.subject;
    } else if (shareSocial.whatsapp) {
      title = shareSocial.whatsapp.title;
      url = shareSocial.whatsapp.url;
    }
    shareSocialNative(title, content);
  };

  return (
    <div className={styles["share-social-dropdown"]}>
      {isNativeSharingCompatible ? (
        <Button variant="secondary" onClick={onClickHandler} title="Compatible" />
      ) : (
        <DropdownComponent title={buttonTitle} buttonVariant="secondary">
          <ShareSocialComponent {...shareSocial} />
        </DropdownComponent>
      )}
    </div>
  );
};

export { ShareSocialDropdownComponent };
