import * as React from "react";
import styles from "./filter-bar-component.module.scss";
import ChevronDown from "@assets/icons/chevron-down.svg";
import { Button } from "@app/prep/modules-prep/core";
import { Link } from "react-router-dom";

export interface IFilterBarComponentProps {}

const FilterBarComponent = (props: IFilterBarComponentProps) => (
  <div className={styles["filter-bar"]}>
    <div className={styles["filter-bar__header"]}>
      <div className="uk-container">
        <div className={styles["filter-bar__filters"]}>
          <div className={styles["filter-bar__filter-list"]}>
            <div className={styles["filter-label"]}>Filters</div>
            <div className={styles["filter-status"]}>
              <Button
                title={"Status"}
                type={"button"}
                variant={"dropdown"}
                icon={ChevronDown}
              />
              <div data-uk-dropdown="mode: click">
                <div className={styles["dropdown-head"]}>
                  <input placeholder={"Merk zoeken"} />
                </div>
                <div className={styles["dropdown-body"]}>
                  <div className={styles["uk-grid uk-child-width-1-2"]}>
                    <div>
                      <ul className={styles["dropdown-list"]}>
                        <li />
                      </ul>
                    </div>
                    <div>
                      <ul className={styles["dropdown-list"]}>
                        <li />
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={styles["dropdown-bottom"]}>
                  <ul className={styles["dropdown-bottom__action"]}>
                    <li>
                      <Link to="#">Verwijder merk filters (2)</Link>
                    </li>
                    <li>
                      <Button title={"Toon 123 Winkels"} href={"#"} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles["filter-category"]}>
              <Button
                title={"Categorie"}
                type={"button"}
                variant={"dropdown"}
                icon={ChevronDown}
              />
              <div data-uk-dropdown="mode: click">Lorem</div>
            </div>
            <div className={styles["filter-brand"]}>
              <Button
                title={"Merk"}
                type={"button"}
                variant={"dropdown"}
                icon={ChevronDown}
              />
              <div data-uk-dropdown="mode: click">Lorem</div>
            </div>
          </div>
          <div className={styles["filter-bar__sort"]}>filter sort</div>
        </div>
      </div>
    </div>
  </div>
);

export { FilterBarComponent };
