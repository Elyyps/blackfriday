/* tslint:disable */
import * as React from "react";
import styles from "./shop-single-header-component.module.scss";
import IconDefault from "@assets/icons/link.svg";
import CheckIcon from "@assets/icons/check.svg";
import HeartIcon from "@assets/icons/heart-filled.svg";
import { IconComponent } from "@app/prep/modules-prep/core";
import { DiscountCardComponent } from "@app/core/discount-card";
import { NewsletterComponent } from "@app/core/newsletter";
import { StarsRatingComponent } from "@app/core/stars-rating";
import { KeywordTagComponent } from "@app/core/keyword-tag";
import { Button } from "@app/core";
import { BackLinkComponent } from "@app/core/back-button";
import { ShopSingleHeaderModule } from "@app/api/modules/shop-single-header/shop-single-header.module";
import { generateDummyNewsletterModule } from "@app/api/modules/newsletter/generate-dummy-data";
import { ShareSocialDropdownComponent } from "@app/core/share-social-dropdown";
import { socialMediaButtons } from "@app/api/core/share-social/generate-dummy-data";
import { LinkComponent } from "@app/core/link";
import { BodyTextComponent } from "@app/core/bodytext";
import { injectIntl, InjectedIntlProps } from "react-intl";
import { ClickableComponent } from "@app/core/clickable";
import { BreadcrumbComponent } from "@app/core/breadcrumb";
import { ShadowCardComponent } from "@app/core/shadow-card";

export interface IShopSingleHeaderComponentProps {
  shopSingleHeaderModule: ShopSingleHeaderModule;
}

const component = (props: IShopSingleHeaderComponentProps & InjectedIntlProps) => {
  const {
    breadcrumbProps,
    checkList,
    CheckListTitle,
    bodyTextModule,
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
    title,
    shareSocial
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
            <ShadowCardComponent>
              <div className={styles["product-detail__body"]}>
                <div className={styles["product-detail__header"]}>
                  <img src={picture} alt="image" />
                </div>
                <div className={styles["product-detail__content"]}>
                  {breadcrumbProps && (
                    <div className={styles["product-detail__content__subtitle"]}>
                      <BreadcrumbComponent links={breadcrumbProps.links} backButton={breadcrumbProps.backButton} />
                    </div>
                  )}
                  <div className={styles["content"]}>
                    <div className={styles["content__head"]}>
                      <h1 style={{ margin: "0" }}>{title}</h1>
                      <div className={`${styles["content__head__stars"]} uk-visible@s`}>
                        <StarsRatingComponent rating={rating.value} voteTrigger={() => {}} />
                        <span>{rating.text}</span>
                      </div>
                    </div>
                    <div className={styles["content__body"]}>
                      <BodyTextComponent style={{ margin: 0, padding: 0 }} bodyTextModule={bodyTextModule} />
                    </div>
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
                        <ClickableComponent
                          variant="link-primary"
                          href={storeLink.url}
                          title={storeLink.title}
                          iconStyle="filled"
                          icon={IconDefault}
                        />

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
                          <ShareSocialDropdownComponent
                            buttonTitle={props.intl.formatMessage({ id: "social-media-share" })}
                            shareSocial={shareSocial}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={`${styles["labels"]} uk-visible@s`}>
                      {keywords.map((item, key) => (
                        <KeywordTagComponent style={{ marginLeft: key == 0 ? "0" : "4px" }} key={key}>
                          {item}
                        </KeywordTagComponent>
                      ))}
                    </div>
                  </div>
                  <div className="uk-hidden@s">
                    <NewsletterComponent newsletterModule={generateDummyNewsletterModule()} />
                  </div>
                </div>
              </div>
            </ShadowCardComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShopSingleHeaderComponent = injectIntl(component);
export { ShopSingleHeaderComponent };
