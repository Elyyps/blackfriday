import * as React from "react";
import styles from "./navbar-search-component.module.scss";
import {
  CardButton,
  CardShop,
  CardProduct,
  IconComponent
} from "@app/prep/modules-prep/core";
import { SEARCH_ICON } from "@app/constants/icons";
import CoolBlue from "@assets/cool-blue.svg";
import Store from "@assets/icons/store.svg";
import Oasis from "@assets/oasis.jpg";

export interface INavbarSearchComponentProps {}

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

const CardMore = [
  {
    title: "Wij hebben meer winkels in ons overzicht",
    image: Store,
    button_text: "Alle winkels",
    button_link: "#"
  }
];

const NavbarSearchComponent = (props: INavbarSearchComponentProps) => (
  <div className={styles["navbar-search"]}>
    <div className={styles["navbar-search__bar"]}>
      <div className={styles["navbar-search__field"]}>
        <div className={styles["navbar-search__icon"]}>
          <IconComponent icon={SEARCH_ICON} size="12px" />
        </div>

        <input
          type="text"
          placeholder="Zoek deals en winkels"
          className={styles["navbar-search__input"]}
        />

        <div className={styles["navbar-search__results"]}>
          <div className="uk-container">
            <h2>Gevonden deals</h2>
            <div
              className={`uk-grid uk-grid-small uk-child-width-1-3@s ${
                styles["navbar-search__results-posts"]
              }`}
            >
              {SearchProducts.map((item, key) => (
                <div key={key}>
                  <CardProduct {...item} variant={"responsive"} />
                </div>
              ))}

              {CardMore.map((item, i) => (
                <div key={i}>
                  <CardButton {...item} variant={"responsive"} />
                </div>
              ))}
            </div>
            <h2>Gevonden winkels</h2>
            <div
              className={`uk-grid uk-grid-small uk-child-width-1-3@s ${
                styles["navbar-search__results-posts"]
              }`}
            >
              {SearchItems.map((item, key) => (
                <div key={key}>
                  <CardShop {...item} variant={"responsive"} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export { NavbarSearchComponent };
