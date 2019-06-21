import * as React from "react";
import { Link } from "react-router-dom";
import "./footer-component.scss";
import {
  ImageComponent,
  Button,
  IconComponent
} from "@app/prep/modules-prep/core";

import LOGO from "@assets/bf-expert-brand.svg";
import Paper from "@assets/icons/paper.svg";
import Mail from "@assets/icons/mail.svg";
import Facebook from "@assets/icons/facebook.svg";
import Instagram from "@assets/icons/instagram.svg";
import Star from "@assets/icons/star-filled.svg";
import Store from "@assets/icons/store.svg";
import Medal from "@assets/icons/medal.svg";

import { USP } from "@app/prep/modules-prep/core/usp/usp.component";

export interface IFooterComponentProps {}

const FooterComponent = (props: IFooterComponentProps) => {
  const numberStars = 5;
  const footerBottomNav = [
    {
      title: "Partner worden?",
      link: "/"
    },
    {
      title: "Algemene voorwaarden",
      link: "/"
    },
    {
      title: "Privacy",
      link: "/"
    },
    {
      title: "Cookiebeleid",
      link: "/"
    }
  ];

  const footerNav = [
    {
      title: "Wat is er nu trending",
      links: [
        {
          title: "Black Friday 2019",
          link: "/"
        },
        {
          title: "Black Friday Apple",
          link: "/"
        },
        {
          title: "Black Friday Deals",
          link: "/"
        },
        {
          title: "Black Friday Elektronica",
          link: "/"
        },
        {
          title: "Black Friday Gaming",
          link: "/"
        },
        {
          title: "Black Friday Winkels",
          link: "/"
        },
        {
          title: "Cyber Monday 2019",
          link: "/"
        }
      ]
    },
    {
      title: "Meer Black Friday",
      links: [
        {
          title: "Airpods Black Friday",
          link: "/"
        },
        {
          title: "Black Friday Kleding",
          link: "/"
        },
        {
          title: "Black Friday Jumbo",
          link: "/"
        },
        {
          title: "Black Friday Rituals",
          link: "/"
        },
        {
          title: "Black Friday G-star",
          link: "/"
        },
        {
          title: "Black Friday Center Parcs",
          link: "/"
        },
        {
          title: "Black Friday Computer",
          link: "/"
        }
      ]
    }
  ];

  return (
    <div className="footer">
      <div className="footer__top">
        <div className="uk-container">
          <div className="footer__top-holder">
            <div className="footer__top-left">
              <ul className="footer__top-list">
                <li>
                  <IconComponent icon={Store} size="20px" />
                  132 winkels
                </li>
                <li>
                  <IconComponent icon={Medal} size="20px" />
                  560 Deals
                </li>
              </ul>
            </div>
            <div className="footer__top-right uk-visible@m">
              <USP />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__holder">
        <div className="uk-container">
          <div className="footer__columns">
            {footerNav.map((item, index) => (
              <div key={index} className="footer__column-collapse">
                <div className="footer__column-title">{item.title}</div>
                <div className="footer__column-collapse-body">
                  <ul className="footer__column-nav">
                    {item.links.map((link, i) => (
                      <li key={i}>
                        <Link to={link.link}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="footer__column-collapse">
              <div className="footer__column-title">
                Eenvoudig met ons in contact
              </div>
              <div className="footer__column-collapse-body">
                <ul className="footer__social">
                  <li>
                    <Link to="/" className="footer__social-link">
                      <div className="footer__social-icon">
                        <IconComponent icon={Facebook} size="10px" />
                      </div>
                      <div className="footer__social-text">
                        <div className="footer__social-title">Facebook</div>
                        4.240 mensen vinden ons leuk
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="footer__social-link">
                      <div className="footer__social-icon">
                        <IconComponent icon={Instagram} size="16px" />
                      </div>
                      <div className="footer__social-text">
                        <div className="footer__social-title">Instagram</div>
                        Volg ons voor leuke acties
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="footer__social-link">
                      <div className="footer__social-icon">
                        <IconComponent icon={Mail} size="16px" />
                      </div>
                      <div className="footer__social-text">
                        <div className="footer__social-title">Mailtje</div>
                        Heeft u een vraag? Stel hem gerust!
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="footer__column-body">
                <div className="footer__column-title">
                  Aanmelden voor onze nieuwsbrief
                </div>
                <p>En ontvang ons de allerbeste aanbiedingen</p>
                <Button title="Nieuwsbrief" variant="invert" icon={Paper} />
              </div>
              <div className="footer__column-footer">
                <div className="rating">
                  <div className="rating__mark">5,0</div>
                  <div className="rating__stars">
                    {[...Array(numberStars)].map((e, i) => (
                      <span key={i}>
                        <IconComponent icon={Star} size="14px" />
                      </span>
                    ))}
                  </div>
                  143 Google Reviews
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
                <ImageComponent src={LOGO} alt="image" />
              </Link>
              © 2019 · Black Friday Expert is een initiatief van Maddox Media
              B.V.
            </div>
            <ul className="footer__nav">
              {footerBottomNav.map((link, key) => (
                <li key={key}>
                  <Link to={link.link}>{link.title}</Link>
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
