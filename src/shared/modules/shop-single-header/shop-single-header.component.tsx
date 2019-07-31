/* tslint:disable */
import * as React from "react";
import styles from "./shop-single-header-component.module.scss";
import IconDefault from "@assets/icons/link.svg";
import CheckIcon from "@assets/icons/check.svg";
import HeartIcon from "@assets/icons/heart-filled.svg";
import ShareIcon from "@assets/icons/share.svg";
import { IconComponent } from "@app/prep/modules-prep/core";
import { DiscountCardComponent } from "@app/core/discount-card";
import { NewsletterComponent } from "@app/core/newsletter";
import { StarsRatingComponent } from "@app/core/stars-rating";
import { KeywordTagComponent } from "@app/core/keyword-tag";
import { Button } from "@app/core";
import { BackLinkComponent } from "@app/core/back-button";
import { ShopSingleHeaderModule } from "@app/api/modules/shop-single-header/shop-single-header.module";
import { generateDummyNewsletterModule } from "@app/api/modules/newsletter/generate-dummy-data";
import { LinkComponent } from "@app/core/link";

export interface IShopSingleHeaderComponentProps {
  shopSingleHeaderModule: ShopSingleHeaderModule;
}

const ShopSingleHeaderComponent = (props: IShopSingleHeaderComponentProps) => {
  const {
    links,
    checkList,
    CheckListTitle,
    content,
    couponCode,
    discountButton,
    discountPicture,
    discountSubtitle,
    discountTitle,
    favoriteButton,
    keywords,
    picture,
    rating,
    smallBackLink,
    storeLink,
    timeLeftBar,
    title
  } = props.shopSingleHeaderModule;

  return (
    <div className={styles["container"]}>
      <div className={styles["product-detail"]}>
        <div className={"uk-grid uk-grid-small"}>
          <div className={"uk-width-1-3@s"}>
            <div className={styles["card-wrap"]}>
              <React.Fragment>
                <DiscountCardComponent
                  status={timeLeftBar.text}
                  buttonText={discountButton.title}
                  buttonLink={discountButton.url}
                  content={discountSubtitle}
                  coupon={couponCode}
                  image={discountPicture}
                  title={discountTitle}
                  range={timeLeftBar.value}
                />
                <div className={"uk-visible@s"}>
                  <NewsletterComponent newsletterModule={generateDummyNewsletterModule()} />
                </div>
              </React.Fragment>
            </div>
          </div>
          <div className={"uk-width-2-3@s"}>
            <div className={styles["product-detail__body"]}>
              <div className={styles["product-detail__header"]}>
                <img src={picture} alt="image" />
              </div>
              <div className={styles["product-detail__content"]}>
                <div className={styles["product-detail__content__subtitle"]}>
                  {links.map((link, index) => {
                    return (
                      <React.Fragment>
                        <LinkComponent key={index} to={link.url}>
                          {link.title}
                        </LinkComponent>{" "}
                        {index < links.length - 1 ? " - " : ""}
                      </React.Fragment>
                    );
                  })}
                </div>
                <div className={styles["content"]}>
                  <div className={styles["content__head"]}>
                    <h1 style={{ margin: "0" }}>{title}</h1>
                    <div className={`${styles["content__head__stars"]} uk-visible@s`}>
                      <StarsRatingComponent rating={rating.value} voteTrigger={() => {}} />
                      {rating.text}
                    </div>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: content }} className={styles["content__body"]} />
                  {checkList && (
                    <div className="uk-visible@s">
                      <h4>{CheckListTitle}</h4>
                      <div className={styles["product-detail__list"]}>
                        {checkList.map((item, key) => (
                          <div key={key} className={styles["product-detail__list__item"]}>
                            <IconComponent size={"16px"} icon={CheckIcon} />
                            <div className={styles["product-detail__list__item__text"]}>{item}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles["product-detail__footer"]}>
                  <div className={styles["actions"]} data-uk-margin>
                    <div className={styles["actions__item"]}>
                      <a className={styles["actions__item__first"]} role="button" href={storeLink.url}>
                        <h5 style={{ marginBottom: "0" }}>{storeLink.title}</h5>
                        <IconComponent icon={IconDefault} size="14px" />
                      </a>
                      <div className={`${styles["content__head__stars"]} uk-hidden@s`}>
                        <StarsRatingComponent rating={rating.value} voteTrigger={() => {}} />
                        {rating.text}
                      </div>
                    </div>
                    <div className={styles["actions__item"]}>
                      <div className={styles["actions__item-wrap"]}>
                        <div className="uk-hidden@s">
                          <Button
                            icon={HeartIcon}
                            iconPosition="left"
                            title={smallBackLink.title}
                            variant={"secondary"}
                          />
                        </div>
                        <div className="uk-visible@s">
                          <Button
                            icon={HeartIcon}
                            iconPosition="left"
                            title={favoriteButton.title}
                            variant={"secondary"}
                          />
                        </div>
                        <Button icon={ShareIcon} iconPosition="left" title={"Delen"} variant={"secondary"} />
                      </div>
                    </div>
                  </div>
                  <div className={`${styles["labels"]} uk-visible@s`}>
                    {keywords.map((item, key) => (
                      <KeywordTagComponent key={key}>{item}</KeywordTagComponent>
                    ))}
                  </div>
                </div>
                <div className="uk-hidden@s">
                  <NewsletterComponent newsletterModule={generateDummyNewsletterModule()} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ShopSingleHeaderComponent };
