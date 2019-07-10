import * as React from "react";
import styles from "./shop-single-header-component.module.scss";
import IconDefault from "@assets/icons/link.svg";
import CheckIcon from "@assets/icons/check.svg";
import { Button, CardShop, IconComponent, SharedBox, Modal, Input, TextArea } from "@app/prep/modules-prep/core";
import { Link } from "react-router-dom";
import { DiscountCardComponent } from "@app/core/discount-card";
import { NewsletterComponent } from "@app/core/newsletter";
import Oasis from "@assets/oasis.jpg";
import { BodyTextComponent } from "@app/prep/modules-prep";
import { StarsRatingComponent } from "@app/core/stars-rating";
import { KeywordTagComponent } from "@app/core/keyword-tag";

export interface IShopSingleHeaderComponentProps {
  breadcrumbs?: any;
  content: string;
  image?: string;
  rating?: any;
  title: string;
  listTitle?: string;
  checkList?: string[];
}

const ShopSingleHeaderComponent = (props: IShopSingleHeaderComponentProps) => {
  const { content, title, listTitle, checkList, image, rating, breadcrumbs } = props;
  return (
    <div className={styles["product-detail"]}>
      <div className={"uk-container"}>
        <div className={"uk-grid uk-grid-small"}>
          <div className={"uk-width-1-3@s"}>
            <div className={styles["card-wrap"]}>
              <React.Fragment>
                <DiscountCardComponent range={0.6} />
                <div className={"uk-visible@s"}>
                  <NewsletterComponent />
                </div>
              </React.Fragment>
            </div>
          </div>
          <div className={"uk-width-2-3@s"}>
            <div className={styles["product-detail__body"]}>
              <div className={styles["product-detail__header"]}>
                <img src={Oasis} alt="image" />
              </div>
              <div className={styles["product-detail__content"]}>
                <div className={styles["product-detail__content__subtitle"]}>Home ⎯ Alle winkels</div>
                <div className={styles["content"]}>
                  <div className={styles["content__head"]}>
                    <h1>{title}</h1>
                    <div className={`${styles["content__head__stars"]} uk-visible@s`}>
                      <StarsRatingComponent numberStars={5} rating={4} />
                      Beoordeel deze deal
                    </div>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: content }} className={styles["content__body"]} />
                  {checkList && <h4>{listTitle}</h4> && (
                    <div className={styles["product-detail__list"]}>
                      {checkList.map((item, key) => (
                        <div key={key} className={styles["product-detail__list__item"]}>
                          <IconComponent size={"16px"} icon={CheckIcon} />
                          <div className={styles["product-detail__list__item__text"]}>{item}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className={styles["product-detail__footer"]}>
                  <div className={styles["actions"]} data-uk-margin>
                    <div className={styles["actions__item"]}>
                      <Button href={"#"} title={"Beddenreus"} variant={"link"} icon={IconDefault} />
                      <div className="uk-hidden@s">RATING</div>
                    </div>
                    <div className={styles["actions__item"]}>
                      <div className={styles["actions__item-wrap"]}>
                        <Button href={"#"} title={"Winkel opslaan als favoriet"} variant={"secondary"} />
                        SHARED BOX
                      </div>
                    </div>
                  </div>
                  <div className={`${styles["labels"]} uk-visible@s`}>
                    <KeywordTagComponent> Swiss sense</KeywordTagComponent>
                  </div>
                </div>
              </div>
            </div>
            NEWSLETTER
          </div>
        </div>
      </div>
    </div>
  );
};

export { ShopSingleHeaderComponent };
