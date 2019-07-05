import * as React from "react";
import "./product-detail-component.scss";
import { Card } from "@app/prep/pages-prep/winkel-single/dummy-data";
import { Button, CardShop, IconComponent } from "@app/prep/modules-prep/core";
import { RatingComponent } from "./rating.component";
import { Link } from "react-router-dom";

export interface IProductDetailComponentComponentProps {
  breadcrumbs?: any;
  content?: string;
  image?: string;
  labelList?: any;
  list?: any;
  rating?: any;
  title?: string;
}

const ProductDetailComponent = ({
  title,
  content,
  image,
  labelList,
  rating,
  breadcrumbs,
  list
}: IProductDetailComponentComponentProps) => (
  <div className="product-detail">
    <div className="uk-container">
      <div className="uk-grid uk-grid-small">
        <div className="uk-width-1-3@s">
          <div className="card-wrap">
            {Card &&
              Card.map((item, key) => (
                <>
                  <CardShop key={key} {...item} />
                  <div className="card-message uk-visible@s">
                    <div className="card__head">
                      <IconComponent icon={item.message.icon} size={"30px"} />
                    </div>
                    <div className="card__body">
                      <div className="card__content">
                        {item.message.description}
                      </div>
                      <div className="card__action">
                        <Button {...item.message.button} />
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
        <div className="uk-width-2-3@s">
          <div className="product-detail__body">
            <div className="product-detail__header">
              {image ? <img src={image} alt="image" /> : ""}
            </div>
            <div className="product-detail__content">
              {breadcrumbs ? (
                <ul className="breadcrumbs">
                  {breadcrumbs.map((item: any, key: number) => (
                    <li key={key}>
                      <Link to={item.link}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
              <div className="content">
                <div className="content__head">
                  <h1>{title}</h1>
                  <div className="uk-visible@s">
                    <RatingComponent {...rating} />
                  </div>
                </div>
                <div className="content__body">{content}</div>
                {list ? <h3>{list.list_title}</h3> : ""}
                <ul className={"uk-list-check radtin__list"}>
                  {list.items.map((item: string, key: number) => (
                    <li key={key}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="product-detail__footer">
                <div className="actions" data-uk-margin>
                  <div className="actions__item">
                    <Button href={"#"} title={"Beddenreus"} variant={"link"} />
                    <div className="uk-hidden@s">
                      <RatingComponent {...rating} />
                    </div>
                  </div>
                  <div className="actions__item">
                    <div className="actions__item-wrap">
                      <Button
                        href={"#"}
                        title={"Winkel opslaan als favoriet"}
                        variant={"secondary"}
                      />
                      <Button
                        href={"#"}
                        title={"secondary"}
                        variant={"dropdown"}
                      />
                    </div>
                  </div>
                </div>
                <div className="labels uk-visible@s">
                  {labelList
                    ? labelList.map((item: any, key: number) => (
                        <div key={key} className="labels__item">
                          <Button title={item} variant={"simple"} />
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
          {Card &&
            Card.map((item, key) => (
              <>
                <div className="card-message uk-hidden@s">
                  <div className="card__head">
                    <IconComponent icon={item.message.icon} size={"30px"} />
                  </div>
                  <div className="card__body">
                    <div className="card__content">
                      {item.message.description}
                    </div>
                    <div className="card__action">
                      <Button {...item.message.button} />
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  </div>
);

export { ProductDetailComponent };
