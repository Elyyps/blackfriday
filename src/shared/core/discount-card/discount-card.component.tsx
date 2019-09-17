import * as React from "react";
import styles from "./discount-card-component.module.scss";
import { ImageComponent } from "@app/core";
const CopyToClipboard = require("react-copy-to-clipboard");

import IconDefault from "@assets/icons/link.svg";
import { TimeLeftBarComponent } from "../time-left-bar";
import { injectIntl, InjectedIntlProps } from "react-intl";
import { getStatusBarColor } from "@app/util/get-status-bar-color";
import { ClickableComponent } from "../clickable";
import { TooltipComponent } from "../tooltip";

interface IDiscountCardComponentProps {
  buttonLink: string;
  buttonText: string;
  content: string;
  coupon: string;
  image: string;
  range: number;
  status: string;
  title: string;
}

const component = (props: IDiscountCardComponentProps & InjectedIntlProps) => {
  const { title, status, content, image, range, buttonText, buttonLink, coupon } = props;
  const [messageDisplayed, setMessageDisplayed] = React.useState<boolean>(false);
  const [messageDisplayedSticky, setMessageDisplayedSticky] = React.useState<boolean>(false);
  const [couponCopied, setCouponCopied] = React.useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = React.useState<number>(0);
  const [couponY, setCouponY] = React.useState<number>(0);
  const rootElement = React.useRef<HTMLDivElement>(null);
  const targetTooltip = React.useRef<HTMLButtonElement>(null);
  const targetTooltipSticky = React.useRef<HTMLButtonElement>(null);
  const ClipLoaderTimer = 1500;

  const displayMessage = (comingFromSticky: boolean) => {
    setCouponCopied(true);

    if (comingFromSticky) setMessageDisplayedSticky(true);
    else setMessageDisplayed(true);

    setTimeout(() => {
      setMessageDisplayed(false);
      setMessageDisplayedSticky(false);
    }, ClipLoaderTimer);
  };

  React.useEffect(() => {
    if (typeof rootElement.current === null) {
      return undefined;
    }

    window.addEventListener("scroll", () => {
      handleScrollChange();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        handleScrollChange();
      });
    };
  }, []);

  const handleScrollChange = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (rootElement && rootElement.current) {
      const rect = rootElement.current.getBoundingClientRect();
      setCouponY(rect.bottom);
      setScrollPosition(winScroll);
    }
  };

  return (
    <div ref={rootElement} className={styles["discount-card"]}>
      {messageDisplayedSticky && (
        <TooltipComponent
          isOpened={messageDisplayedSticky && scrollPosition >= couponY}
          parentElement={targetTooltipSticky}
        >
          {props.intl.formatMessage({ id: "discount-code" })}
        </TooltipComponent>
      )}
      {messageDisplayed && (
        <TooltipComponent isOpened={messageDisplayed} parentElement={targetTooltip}>
          {props.intl.formatMessage({ id: "discount-code" })}
        </TooltipComponent>
      )}
      <div
        className={`${scrollPosition > couponY ? styles["discount-card__sticky-opened"] : ""} ${
          styles["discount-card__sticky"]
        }`}
      >
        <div className={`uk-container`}>
          <div className={`${styles["discount-card__sticky__content"]}`}>
            <div className={styles["discount-card__sticky__content__image"]}>
              <ImageComponent alt="Logo" sizes="56px" src={image} />
            </div>

            <div className={styles["discount-card__sticky__content__title"]}>Beddenreus</div>
            <div className={`${styles["discount-card__sticky__content__subtitle"]}`}>{title}</div>
          </div>
          <div className={styles["discount-card__sticky__actions"]}>
            <span>{content}</span>
            <button
              ref={targetTooltipSticky}
              onClick={() => {
                displayMessage(true);
              }}
              className={styles["discount-card__coupon"]}
              style={{ cursor: "pointer", backgroundColor: couponCopied ? "#caf7d6" : "white" }}
            >
              {coupon}
            </button>

            <ClickableComponent
              iconFillColor="white"
              iconRight={IconDefault}
              title={buttonText}
              href={buttonLink}
              variant={"primary-default"}
            />
          </div>
        </div>
      </div>
      <div className={styles["discount-card__body"]}>
        <div className={styles["discount-card__image"]}>
          <ImageComponent alt="Logo" src={image} />
        </div>
        <div style={{ color: getStatusBarColor(range) }} className={styles["discount-card__label"]}>
          {status}
        </div>
        <TimeLeftBarComponent color={getStatusBarColor(range)} range={range} />
        <div className={styles["discount-card__content"]}>
          <div className={styles["discount-card__title"]}>{title}</div>
          <div className={`${styles["discount-card__subtitle"]}  uk-visible@s`}>{content}</div>
        </div>
      </div>
      <div className={styles["discount-card__action"]}>
        <CopyToClipboard text={coupon}>
          <button
            onClick={() => displayMessage(false)}
            className={styles["discount-card__coupon"]}
            style={couponCopied ? { backgroundColor: "#caf7d6" } : { backgroundColor: "white" }}
          >
            {coupon}
          </button>
        </CopyToClipboard>
        {messageDisplayed && (
          <div className={styles["discount-card__tooltip"]} aria-hidden="true">
            <div className={styles["discount-card__tooltip__message"]}>
              {props.intl.formatMessage({ id: "discount-code" })}
            </div>
            <div className={styles["discount-card__tooltip__arrow"]} />
          </div>
        )}
        <ClickableComponent
          iconFillColor="white"
          iconRight={IconDefault}
          title={buttonText}
          href={buttonLink}
          variant={"primary-default"}
        />
      </div>
    </div>
  );
};
const DiscountCardComponent = injectIntl(component);
export { DiscountCardComponent };
