import React, { useState, useEffect } from "react";
import styles from "./shop-card-component.module.scss";
import { TimeLeftBarComponent } from "../time-left-bar";
import LinkIcon from "@assets/icons/link.svg";
import { Store } from "@app/api/core/store/store";
import { getStoreStatusText } from "@app/util/store";
import { ClickableComponent } from "../clickable";
import { injectIntl, InjectedIntlProps } from "react-intl";
import { IconComponent } from "../icon";
import IconHot from "@assets/icons/hot.svg";
import { Link } from "react-router-dom";
import { getStatusBarColor } from "@app/util/get-status-bar-color";
import { trimText } from "@app/util/trim-text";
const objectFitImages = require("object-fit-images");
export interface IShopCardComponentProps {
  store: Store;
  variant?: string;
}

const checkTextLength = (text: string, maxCharacters: number) => {
  if (text.length > maxCharacters) {
    return trimText(text, maxCharacters);
  }

  return text;
};

const CHARACTERS_LONG = 72;
const CHARACTERS_SHORT = 46;

const component = (props: IShopCardComponentProps & InjectedIntlProps) => {
  const { description, logo, moreInfoLink, name, status, timeLeftPercentage, label } = props.store;
  const modalRef = React.createRef<any>();
  const [trimmedDescription, setTrimmedDescription] = useState<string>(description);
  const shopCardVariantClass = props.variant ? styles[`${props.variant}`] : "";
  const MAX_CHARACTERS = props.variant !== "responsive" ? CHARACTERS_LONG : CHARACTERS_SHORT;

  useEffect(() => {
    setTrimmedDescription(checkTextLength(description, MAX_CHARACTERS));
    objectFitImages(modalRef.current);
  }, []);

  return (
    <div className={`${styles["shop-card"]} ${shopCardVariantClass}`}>
      {label && (
        <div className={styles["label"]}>
          <IconComponent icon={IconHot} fillColor="white" size={"12px"} />
          <span>{label}</span>
        </div>
      )}
      <div className={styles["image"]}>
        <Link to="/stores-single">
          <img alt={"img"} ref={modalRef} className={styles["object-fit-polyfill"]} src={logo} />
        </Link>
      </div>

      <div className={`${styles["status"]}`}>
        <div className={`${styles["status-title"]} ${styles[getStatusBarColor(timeLeftPercentage)]}`}>
          {getStoreStatusText(status)}
        </div>
        <div className={styles["status-bar"]}>
          <TimeLeftBarComponent
            variant="responsive"
            color={getStatusBarColor(timeLeftPercentage)}
            range={timeLeftPercentage}
          />
        </div>
      </div>

      <div className={styles["content"]}>
        <div className={styles["content-title"]}>
          <h4>{name}</h4>
        </div>
        <span className={styles["content-description"]}>{trimmedDescription}</span>
        <span className={styles["content-link"]}>
          <ClickableComponent
            href="/stores-single"
            title={props.intl.formatMessage({ id: "see-more" })}
            variant="link-primary"
          />
        </span>
      </div>
      <div className={styles["action"]}>
        <ClickableComponent
          iconStyle="filled"
          dynamicSize={true}
          title={props.intl.formatMessage({ id: "shop-card-clickable-title" })}
          icon={LinkIcon}
          iconPosition="right"
          href={moreInfoLink}
        />
      </div>
    </div>
  );
};
const ShopCardComponent = injectIntl(component);
export { ShopCardComponent };
