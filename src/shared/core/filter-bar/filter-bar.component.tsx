import * as React from "react";
import styles from "./filter-bar-component.module.scss";
import { DropdownComponent } from "@app/core/dropdown/dropdown.component";
import { SearchFilterControlComponent } from "@app/core/search-filter-control/search-filter-control.component";
import { generateDummyCheckboxArray } from "@app/api/core/checkbox";
import { IconComponent } from "@app/prep/modules-prep/core";
import HandPointing from "@assets/icons/hand-pointing.svg";
import StoreIcon from "@assets/icons/store.svg";
import ArrowLongDown from "@assets/icons/arrow-long-down.svg";

export interface IFilterBarComponentProps {}

const FilterBarComponent = (props: IFilterBarComponentProps) => {
  const checkbox = generateDummyCheckboxArray();
  const status = ["Stock", "out", "unlimited"];
  const categorie = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const [filterSort, setfilterSort] = React.useState(false);

  const filterSortChange = (e: any) => {
    setfilterSort(!filterSort);
  };

  return (
    <div className={styles["filter-bar"]}>
      <div className={styles["filter-bar__filter-list"]}>
        <div className={` ${styles["filter-label"]}  uk-visible@m`}>
          Filters
          <IconComponent icon={HandPointing} size={"20px"} />
        </div>

        <div className={styles[""]}>
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
        <div className={styles[""]}>
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
        <div className={styles[""]}>
          <DropdownComponent
            title="Merk"
            buttonVariant="secondary"
            orientation="bottom-right"
          >
            <SearchFilterControlComponent checkbox={checkbox} />
          </DropdownComponent>
        </div>
      </div>
      <div className={styles["filter-bar__sort"]}>
        <div className={styles["filter__sort-item"]}>
          <IconComponent icon={StoreIcon} size={"20px"} />
          132 winkels
        </div>
        <div className={styles["filter__sort-item"]}>
          Sorteer op:
          <span role={"button"} onClick={filterSortChange}>
            Relevantie
            <IconComponent icon={ArrowLongDown} size={"6px"} />
          </span>
        </div>
      </div>
    </div>
  );
};

export { FilterBarComponent };
