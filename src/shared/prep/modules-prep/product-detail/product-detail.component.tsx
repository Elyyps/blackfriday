import * as React from "react";
import "./product-detail-component.scss";
import { Cards } from "@app/prep/pages-prep/winkel-single/dummy-data";
import { Button, CardShop, IconComponent } from "@app/prep/modules-prep/core";
import { RatingComponent } from "./rating.component";

export interface IProductDetailComponentComponentProps {
  cards: object;
  image?: string;
  labelList?: string[];
  rating?: any;
}

const ProductDetailComponent = ({
  image,
  labelList,
  cards,
  rating
}: IProductDetailComponentComponentProps) => (
  <div className="product-detail">
    <div className="uk-container">
      <div className="uk-grid uk-grid">
        <div className="uk-width-1-3@s">
          {Cards &&
            Cards.map((item, key) => (
              <>
                <CardShop key={key} {...item} />
                <div className="card-message">
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
        <div className="uk-width-2-3@s">
          <div className="product-detail__body">
            <div className="product-detail__header">
              {image ? <img src={image} alt="image" /> : ""}
            </div>
            <div className="product-detail__content">
              <ul className="breadcrumbs">
                <li>Home</li>
                <li>Alle winkels</li>
              </ul>
              <div className="content">
                <div className="content__head">
                  <h1>Black Friday 2019 bij Beddenreus</h1>
                  <div className="uk-visible@s">
                    <RatingComponent {...rating} />
                  </div>
                </div>
                <div className="content__body">
                  Vier Black Friday bij Beddenreus en ontvang 15% korting op
                  alles! Black Friday bij Beddenreus wil je niet missen! Je
                  geniet van maar liefst 15% korting op alles. Extra
                  interessant: Black Friday duurt bij Beddenreus niet één dag
                  maar ruim een week. Dé week om eens goed na te denken over een
                  nieuwe boxspring, matras of dekbedovertrek! Want 15% korting
                  dat is héél veel! Hét ideale moment dus om jouw favoriete
                  boxspring, matras of winterdekbed te kopen. Online én in de
                  winkel. Meer info
                </div>
                <h3>
                  De voordelen van shoppen bij Beddenreus tijdens Black Friday.
                </h3>
                <ul className={"uk-list-check radtin__list"}>
                  <li>Profiteer van 15% op korting op alles</li>
                  <li>Online én in de winkels</li>
                  <li>De hele week aanbiedingen van 16-11 t/m 26-11</li>
                  <li>Ruimere openingstijden</li>
                </ul>
              </div>
              <div className="product-detail__footer">
                <div className="actions">
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
                <div className="labels">
                  {labelList
                    ? labelList.map((item, key) => (
                        <div key={key} className="labels__item">
                          <Button title={item} variant={"simple"} />
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { ProductDetailComponent };
