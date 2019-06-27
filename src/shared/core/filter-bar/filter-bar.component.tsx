import * as React from "react";
import styles from "./filter-bar-component.module.scss";
import { DropdownComponent } from "@app/core/dropdown/dropdown.component";
import { SearchFilterControlComponent } from "@app/core/search-filter-control/search-filter-control.component";
import { generateDummyCheckboxArray } from "@app/api/core/checkbox";

export interface IFilterBarComponentProps {}

const FilterBarComponent = (props: IFilterBarComponentProps) => {
  const checkbox = generateDummyCheckboxArray();
  const status = ["Stock", "out", "unlimited"];
  const categorie = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

  return (
    <div className={styles["filter-bar"]}>
      <div className={styles["filter-bar__header"]}>
        <div className="uk-container">
          <div className={styles["filter-bar__filters"]}>
            <div className={styles["filter-bar__filter-list"]}>
              <div className={styles["filter-label"]}>Filters</div>

              <div className={styles["filter"]}>
                <DropdownComponent
                  title="Status"
                  buttonVariant="primary-brand"
                  orientation="bottom-left"
                >
                  <ul>
                    {status.map((value, key) => (
                      <li key={key}>{value}</li>
                    ))}
                  </ul>
                </DropdownComponent>
              </div>
              <div className={styles["filter"]}>
                <DropdownComponent
                  title="Categorie"
                  buttonVariant="secondary"
                  orientation="bottom-left"
                >
                  <ul>
                    {categorie.map((value, key) => (
                      <li key={key}>{value}</li>
                    ))}
                  </ul>
                </DropdownComponent>
              </div>
              <div className={styles["filter"]}>
                <DropdownComponent
                  title="Merk"
                  buttonVariant="secondary"
                  orientation="bottom-left"
                >
                  <SearchFilterControlComponent checkbox={checkbox} />
                </DropdownComponent>
              </div>
            </div>
            <div className={styles["filter-bar__sort"]}>filter sort</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FilterBarComponent };
