import * as React from "react";
import styles from "./navbar-search-component.module.scss";
import { IconComponent } from "@app/prep/modules-prep/core";
import { SEARCH_ICON } from "@app/constants/icons";
import StoreIcon from "@assets/icons/store.svg";
import DealsIcon from "@assets/icons/medal.svg";

import { DealCardComponent } from "@app/core/deal-card";
import { SeeMoreCardComponent } from "@app/core/see-more-card";
import { Deal } from "@app/api/core/deal/deal";
import { ShopCardComponent } from "@app/core/shop-card";
import { Store } from "@app/api/core/store/store";
import { InjectedIntlProps, injectIntl } from "react-intl";

const LIMIT_EMPTY = 3;
export interface INavbarSearchComponentProps {
  cleanFilter?: () => void;
  currentFilter: string;
  deals?: Deal[];
  dealsTitle: string;
  getCardsFiltered?: (text: string) => void;
  shopsTitle: string;
  stores?: Store[];
}

const CardMoreDeals = (
  <SeeMoreCardComponent
    title="Wij hebben meer deals in ons overzicht"
    icon={DealsIcon}
    buttonText="Alle deals"
    buttonLink="/deals-overview"
    variant={"responsive"}
  />
);

const CardMoreShops = (
  <SeeMoreCardComponent
    title="Wij hebben meer winkels in ons overzicht"
    icon={StoreIcon}
    buttonText="Alle winkels"
    buttonLink="/stores-overview"
    variant={"responsive"}
  />
);

const component = (props: INavbarSearchComponentProps & InjectedIntlProps) => (
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
          autoFocus
          type="text"
          placeholder="Zoek deals en winkels"
          className={styles["navbar-search__input"]}
        />
        {props.currentFilter && (
          <div className={styles["navbar-search__results"]}>
            <div className="uk-container">
              {props.deals && props.deals.length > 0 && (
                <div>
                  <h2
                    style={{
                      marginLeft: 8
                    }}
                  >
                    Gevonden deals
                  </h2>
                  <div className={`${styles["navbar-search__results-posts"]}`}>
                    {props.deals &&
                      props.deals.map((item, key) => (
                        <div key={key}>
                          <DealCardComponent deal={item} variant={"responsive"} />
                        </div>
                      ))}
                    {props.deals && props.deals.length > 0 && <div>{CardMoreDeals}</div>}
                    {props.deals && props.deals.length > 0 && props.deals.length < LIMIT_EMPTY && <div />}
                  </div>
                </div>
              )}
              {props.stores && props.stores.length > 0 && (
                <h2
                  style={{
                    marginTop: props.deals && props.deals.length > 0 ? "32px" : "0",
                    marginBottom: "16px",
                    marginLeft: 8
                  }}
                >
                  Gevonden winkels
                </h2>
              )}
              <div className={`${styles["navbar-search__results-posts"]}`}>
                {props.stores &&
                  props.stores.map((store, key) => (
                    <div key={key}>
                      <ShopCardComponent store={store} variant={"responsive"} />
                    </div>
                  ))}
                {props.stores && props.stores.length > 0 && <div>{CardMoreShops}</div>}
              </div>
              {props.stores &&
                props.stores.length === 0 &&
                props.deals &&
                props.deals.length === 0 &&
                props.currentFilter && (
                  <div className={styles["navbar-search__not-found"]}>
                    <span>{props.intl.formatMessage({ id: "search-empty-state" })}</span>
                    <div className={styles["navbar-search__see-more"]}>
                      <div>{CardMoreShops}</div> <div>{CardMoreDeals}</div>
                    </div>
                  </div>
                )}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);
const NavbarSearchComponent = injectIntl(component);
export { NavbarSearchComponent };
