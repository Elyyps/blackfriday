import * as React from "react";
import styles from "./navbar-search-component.module.scss";
import { CardButton, CardShop, CardProduct, IconComponent } from "@app/prep/modules-prep/core";
import { SEARCH_ICON } from "@app/constants/icons";
import CoolBlue from "@assets/cool-blue.svg";
import Store from "@assets/icons/store.svg";
import Oasis from "@assets/oasis.jpg";
import { DealCardComponent } from "@app/core/deal-card";
import { SeeMoreCardComponent } from "@app/core/see-more-card";
import { DealCardModule } from "@app/api/core/deal-card";
import { ShopCardModule } from "@app/api/core/shop-card";
import { ShopCardComponent } from "@app/core/shop-card";

export interface INavbarSearchComponentProps {
  currentFilter: string;
  deals?: DealCardModule[];
  dealsTitle: string;
  getCardsFiltered?: (text: string) => void;
  shops?: ShopCardModule[];
  shopsTitle: string;
}

const SearchProducts = [
  {
    image: Oasis,
    sub_title: "Coolblue",
    title: "Apple AirPods 2 met draadloze oplaadcase",
    sale: "Bespaar 40% ",
    price: "€2.429",
    old_price: "€3.429",
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    image: Oasis,
    sub_title: "Coolblue",
    title: "Apple AirPods 2 met draadloze oplaadcase",
    sale: "Bespaar 40% ",
    price: "€2.429",
    old_price: "€3.429",
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    image: Oasis,
    sub_title: "Coolblue",
    title: "Apple AirPods 2 met draadloze oplaadcase",
    sale: "Bespaar 40% ",
    price: "€2.429",
    old_price: "€3.429",
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    image: Oasis,
    sub_title: "Coolblue",
    title: "Apple AirPods 2 met draadloze oplaadcase",
    sale: "Bespaar 40% ",
    price: "€2.429",
    old_price: "€3.429",
    button_text: "Naar deals",
    button_link: "#"
  },
  {
    image: Oasis,
    sub_title: "Coolblue",
    title: "Apple AirPods 2 met draadloze oplaadcase",
    sale: "Bespaar 40% ",
    price: "€2.429",
    old_price: "€3.429",
    button_text: "Naar deals",
    button_link: "#"
  }
];

const SearchItems = [
  {
    title: "Amac",
    sub_title: "Nu geldig",
    range: ".7",
    content: "Een selectie van bizarre vele aanbiedingen.",
    image: CoolBlue,
    button_text: "Naar deals",
    button_link: "#"
  }
];

const CardMoreDeals = (
  <SeeMoreCardComponent
    title="Wij hebben meer deals in ons overzicht"
    icon={Store}
    buttonText="Alle deals"
    buttonLink="#"
    variant={"responsive"}
  />
);

const CardMoreShops = (
  <SeeMoreCardComponent
    title="Wij hebben meer winkels in ons overzicht"
    icon={Store}
    buttonText="Alle winkels"
    buttonLink="#"
    variant={"responsive"}
  />
);

const NavbarSearchComponent = (props: INavbarSearchComponentProps) => (
  <div className={styles["navbar-search"]}>
    <div className={styles["navbar-search__bar"]}>
      <div className={styles["navbar-search__field"]}>
        <div className={styles["navbar-search__icon"]}>
          <IconComponent icon={SEARCH_ICON} size="12px" />
        </div>

        <input
          onChange={event => {
            if (props.getCardsFiltered) props.getCardsFiltered(event.currentTarget.value);
          }}
          type="text"
          placeholder="Zoek deals en winkels"
          className={styles["navbar-search__input"]}
        />
        {props.currentFilter && (
          <div className={styles["navbar-search__results"]}>
            <div className="uk-container">
              {props.deals && props.deals.length > 0 && (
                <div>
                  <h2>Gevonden deals</h2>
                  <div
                    className={`uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m ${
                      styles["navbar-search__results-posts"]
                    }`}
                  >
                    {props.deals &&
                      props.deals.map((item, key) => (
                        <div key={key}>
                          <DealCardComponent
                            title={item.title}
                            subtitle={item.subtitle}
                            oldPrice={item.oldPrice}
                            newPrice={item.newPrice}
                            sale={item.discountText}
                            image={item.picture}
                            buttonLink={item.button.url}
                            buttonText={item.button.title}
                            variant={"responsive"}
                          />
                        </div>
                      ))}
                    {props.deals && props.deals.length > 0 && <div>{CardMoreDeals}</div>}
                  </div>
                </div>
              )}
              {props.shops && props.shops.length > 0 && (
                <h2 style={{ marginTop: props.deals && props.deals.length > 0 ? "32px" : "0", marginBottom: "16px" }}>
                  Gevonden winkels
                </h2>
              )}
              <div
                className={`uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m ${
                  styles["navbar-search__results-posts"]
                }`}
              >
                {props.shops &&
                  props.shops.map((item, key) => (
                    <div key={key}>
                      <ShopCardComponent
                        title={item.title}
                        content={item.content}
                        range={item.timeLeftBar.value}
                        subtitle={item.timeLeftBar.text}
                        image={item.picture}
                        buttonLink={item.button.url}
                        buttonText={item.button.title}
                        variant={"responsive"}
                      />
                    </div>
                  ))}
                {props.shops && props.shops.length > 0 && <div>{CardMoreShops}</div>}
              </div>
            </div>

            {props.shops &&
              props.shops.length === 0 &&
              props.deals &&
              props.deals.length === 0 &&
              props.currentFilter && (
                <div className={styles["navbar-search__no-found"]}>No results found for your search</div>
              )}
          </div>
        )}
      </div>
    </div>
  </div>
);
export { NavbarSearchComponent };
