import * as React from "react";
import { Link } from "react-router-dom";
import "./footer-component.scss";
import { ImageComponent, Button } from "@app/prep/modules-prep/core";
import LOGO from "@assets/bf-expert-brand.svg";
import Paper from "@assets/icons/paper.svg";

export interface IFooterComponentProps {}

const FooterComponent = (props: IFooterComponentProps) => {
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
        <div className="uk-container">top</div>
      </div>
      <div className="footer__holder">
        <div className="uk-container">
          <div className="footer__columns">
            {footerNav.map((item, index) => (
              <div key={index}>
                <div className="footer__column-title">{item.title}</div>
                <ul className="footer__column-nav">
                  {item.links.map((link, i) => (
                    <li key={i}>
                      <Link to={link.link}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <div className="footer__column-title">
                Eenvoudig met ons in contact
              </div>
            </div>
            <div>
              <div className="footer__column-title">
                Aanmelden voor onze nieuwsbrief
              </div>
              <p>En ontvang ons de allerbeste aanbiedingen</p>
              <Button title="Nieuwsbrief" variant="invert" icon={Paper} />
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
