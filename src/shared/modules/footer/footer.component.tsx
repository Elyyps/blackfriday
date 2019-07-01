import * as React from "react";
import { Link } from "react-router-dom";
import "./footer-component.scss";
import { ImageComponent, Button, IconComponent, USP } from "@app/core/";

import { Footer } from "@app/api/modules/footer/models/footer.module";
import { LinkComponent } from "@app/core/link";
import { StarsRatingComponent } from "@app/core/stars-rating";

export interface IFooterComponentProps {
  footerModule: Footer;
}

const FooterComponent = (props: IFooterComponentProps) => {
  const numberStars = 5;
  const rating =
    props.footerModule.middleFooter.googleReviews.rating > numberStars
      ? 0
      : props.footerModule.middleFooter.googleReviews.rating;

  return (
    <div className="footer">
      <div className="footer__top">
        <div className="uk-container">
          <div className="footer__top-holder">
            <div className="footer__top-left">
              <ul className="footer__top-list">
                {props.footerModule.topFooter.topLeftFooter.map(
                  (item, index) => (
                    <li key={index}>
                      <IconComponent icon={item.icon} size="20px" />
                      <span>{item.text}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="footer__top-right uk-visible@m">
              <USP uspModule={props.footerModule.topFooter.topRightFooter} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__holder">
        <div className="uk-container">
          <div className="footer__columns">
            {props.footerModule.middleFooter.links.map((item, index) => (
              <div key={index} className="footer__column-collapse">
                <div className="footer__column-title">{item.title}</div>
                <div className="footer__column-collapse-body">
                  <ul className="footer__column-nav">
                    {item.links.map((link, i) => (
                      <li key={i}>
                        <LinkComponent to={link.url}>
                          {link.title}
                        </LinkComponent>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="footer__column-collapse">
              <div className="footer__column-title">
                {props.footerModule.middleFooter.socialMedia.title}
              </div>
              <div className="footer__column-collapse-body">
                <ul className="footer__social">
                  {props.footerModule.middleFooter.socialMedia.socialItem.map(
                    (item, index) => (
                      <li key={index}>
                        <Link to={item.link} className="footer__social-link">
                          <div className="footer__social-icon">
                            <IconComponent icon={item.image} size="15px" />
                          </div>
                          <div className="footer__social-text">
                            <div className="footer__social-title">
                              {item.nameSocialMedia}
                            </div>
                            {item.text}
                          </div>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div>
              <div className="footer__column-body">
                <div className="footer__column-title">
                  {props.footerModule.middleFooter.newsletter.title}
                </div>
                <p> {props.footerModule.middleFooter.newsletter.text}</p>

                <Button
                  title={props.footerModule.middleFooter.newsletter.bottonText}
                  icon={props.footerModule.middleFooter.newsletter.bottonIcon}
                  variant={"primary-inverted"}
                />
              </div>
              <div className="footer__column-footer">
                <div className="rating">
                  <div className="rating__mark">{rating}</div>
                  <StarsRatingComponent
                    rating={rating}
                    numberStars={numberStars}
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <LinkComponent
                      to={
                        props.footerModule.middleFooter.googleReviews.link.url
                      }
                    >
                      {props.footerModule.middleFooter.googleReviews.link.title}
                    </LinkComponent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="uk-container">
          <div className="footer__bottom-holder">
            <div className="footer__logo-box">
              <Link to="./" className="uk-visible@m footer__logo">
                <ImageComponent
                  src={props.footerModule.bottomFooter.logo}
                  alt="image"
                />
              </Link>
              {props.footerModule.bottomFooter.copyright}
            </div>
            <ul className="footer__nav">
              {props.footerModule.bottomFooter.items.map((link, key) => (
                <li key={key}>
                  <LinkComponent to={link.url}>{link.title}</LinkComponent>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FooterComponent };
