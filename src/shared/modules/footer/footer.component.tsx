import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./footer-component.module.scss";
import { ImageComponent, Button, IconComponent, USPContainer } from "@app/core/";

import { FooterModule } from "@app/api/modules/footer/models/footer.module";
import { LinkComponent } from "@app/core/link";
import { StarsRatingComponent } from "@app/core/stars-rating";
import { ExpandablePanelComponent } from "@app/core/expandable-panel";
import { ModalComponent } from "@app/core/modal";
import { NewsletterFormComponent } from "@app/core/newsletter";
import ArrowUp from "@assets/icons/chevron-up.svg";
import ArrowDown from "@assets/icons/chevron-down.svg";
export interface IFooterComponentProps {
  footerModule: FooterModule;
}
const CLOSE_PANEL = "close";
const numberStars = 5;
const FooterComponent = (props: IFooterComponentProps) => {
  const [openedPanel, setOpenedPanel] = React.useState<string | undefined>(undefined);

  const panelClicked = (key?: string) => {
    if (openedPanel === key) {
      setOpenedPanel(CLOSE_PANEL);
    } else {
      setOpenedPanel(key);
    }
  };

  const onSubmit = () => {
    // Submit logic newsletter  here
  };

  const footerPanelIcon = openedPanel === `${props.footerModule.middleFooter.socialMedia.id}` ? ArrowUp : ArrowDown;

  return (
    <div className={styles["footer"]}>
      <div className={styles["footer__top"]}>
        <div className="uk-container">
          <div className={styles["footer__top-holder"]}>
            <div className={styles["footer__top-left"]}>
              <ul className={styles["footer__top-list"]}>
                {props.footerModule.topFooter.topLeftFooter.map((item, index) => (
                  <li key={index}>
                    <IconComponent icon={item.icon} size="20px" />
                    <span style={{ marginLeft: "10px" }}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${styles["footer__top-right"]} uk-visible@m`}>
              <USPContainer uspModule={props.footerModule.topFooter.usp} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["footer__holder"]}>
        <div className="uk-container">
          <div className={styles["footer__columns"]}>
            {props.footerModule.middleFooter.links.map((item, index) => (
              <div key={index} className={styles["footer__column-collapse"]}>
                <div className={styles["footer__column-desktop__container"]}>
                  <div className={styles["footer__column-title"]}>{item.title}</div>
                  <div className={styles["footer__column-collapse-body"]}>
                    <ul className={styles["footer__column-nav"]}>
                      {item.links.map((link, i) => (
                        <li key={i}>
                          <a rel="noopener" aria-label={`Footbar link to ${link.title}`} href={link.url}>
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles["footer__column-mobile__container"]}>
                  <ExpandablePanelComponent
                    callback={panelClicked}
                    identifier={item.id}
                    opened={openedPanel === item.id}
                    key={index}
                    mainContent={
                      <div
                        className={`${styles["footer__column-title"]} ${
                          openedPanel === `${item.id}` ? styles["footer__column-title__clicked"] : ""
                        }`}
                      >
                        {item.title}
                        <div className={styles["footer__column-title__icon"]}>
                          <IconComponent icon={openedPanel === `${item.id}` ? ArrowUp : ArrowDown} size="10px" />
                        </div>
                      </div>
                    }
                  >
                    <div>
                      <ul className={styles["footer__column-nav"]}>
                        {item.links.map((link, i) => (
                          <li key={i}>
                            <LinkComponent to={link.url}>{link.title}</LinkComponent>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ExpandablePanelComponent>
                </div>
              </div>
            ))}

            <div className={styles["footer__column-collapse"]}>
              <div className={styles["footer__column-desktop__container"]}>
                <div className={styles["footer__column-title"]}>
                  {props.footerModule.middleFooter.socialMedia.title}
                </div>
                <div className={styles["footer__column-collapse-body"]}>
                  <div className={styles["footer__social"]}>
                    {props.footerModule.middleFooter.socialMedia.socialItem.map((item, index) => (
                      <div className={styles["footer__social-items"]} key={index}>
                        <a
                          aria-label="Logo link"
                          href={item.link}
                          className={styles["footer__social-link"]}
                          target="_blank"
                          rel="noopener"
                        >
                          <div className={styles["footer__social-icon"]}>
                            <IconComponent icon={item.image} size="15px" />
                          </div>
                          <div className={styles["footer__social-text"]}>
                            <div className={styles["footer__social-title"]}>{item.nameSocialMedia}</div>
                            {item.text}
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles["footer__column-mobile__container"]}>
                <ExpandablePanelComponent
                  callback={panelClicked}
                  identifier={props.footerModule.middleFooter.socialMedia.id}
                  opened={openedPanel === props.footerModule.middleFooter.socialMedia.id}
                  mainContent={
                    <div
                      className={`${styles["footer__column-title"]} ${
                        openedPanel === `${props.footerModule.middleFooter.socialMedia.id}`
                          ? styles["footer__column-title__clicked"]
                          : ""
                      }`}
                    >
                      {props.footerModule.middleFooter.socialMedia.title}
                      <div className={styles["footer__column-title__icon"]}>
                        <IconComponent icon={footerPanelIcon} size="10px" />
                      </div>
                    </div>
                  }
                >
                  <div className={styles["footer__social"]}>
                    {props.footerModule.middleFooter.socialMedia.socialItem.map((item, index) => (
                      <div className={styles["footer__social-items"]} key={index}>
                        <a rel="noopener" href={item.link} className={styles["footer__social-link"]} target="_blank">
                          <div className={styles["footer__social-icon"]}>
                            <IconComponent icon={item.image} size="15px" />
                          </div>
                          <div className={styles["footer__social-text"]}>
                            <div className={styles["footer__social-title"]}>{item.nameSocialMedia}</div>
                            {item.text}
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </ExpandablePanelComponent>
              </div>
            </div>
            <div>
              <div className={styles["footer__column-body"]}>
                <div className={styles["footer__column-title"]}>{props.footerModule.middleFooter.newsletter.title}</div>
                <p> {props.footerModule.middleFooter.newsletter.text}</p>
                <ModalComponent
                  title={props.footerModule.middleFooter.modalTitle}
                  trigger={
                    <Button
                      title={props.footerModule.middleFooter.newsletter.buttonText}
                      icon={props.footerModule.middleFooter.newsletter.buttonIcon}
                      variant={"primary-inverted"}
                    />
                  }
                  variant={"small"}
                >
                  <NewsletterFormComponent checkBoxItems={[]} onSubmit={onSubmit} />
                </ModalComponent>
              </div>
              <div className={styles["footer__column-footer"]}>
                <div className={styles["rating"]}>
                  <div className={styles["rating__mark"]}>
                    {props.footerModule.middleFooter.googleReviews.rating > numberStars
                      ? 0
                      : props.footerModule.middleFooter.googleReviews.rating}
                  </div>
                  <StarsRatingComponent
                    rating={props.footerModule.middleFooter.googleReviews.rating}
                    // tslint:disable-next-line
                    voteTrigger={() => {}}
                    numberOfStars={numberStars}
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <LinkComponent to={props.footerModule.middleFooter.googleReviews.link.url}>
                      {props.footerModule.middleFooter.googleReviews.link.title}
                    </LinkComponent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["footer__bottom"]}>
        <div className="uk-container">
          <div className={styles["footer__bottom-holder"]}>
            <div className={styles["footer__logo-box"]}>
              <Link aria-label="Logo link" to="./" className={`uk-visible@m ${styles["footer__logo"]}`}>
                <ImageComponent src={props.footerModule.bottomFooter.logo} />
              </Link>
              <span>{props.footerModule.bottomFooter.copyright}</span>
            </div>
            <ul className={styles["footer__nav"]}>
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
