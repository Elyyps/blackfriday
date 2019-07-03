import * as React from "react";
import styles from "./filter-bar-component.module.scss";
import { DropdownComponent } from "@app/core/dropdown/dropdown.component";
import { SearchFilterControlComponent } from "@app/core/search-filter-control/search-filter-control.component";
import { generateDummyCheckboxArray } from "@app/api/core/checkbox";
import { IconComponent } from "@app/prep/modules-prep/core";
import HandPointing from "@assets/icons/hand-pointing.svg";
import StoreIcon from "@assets/icons/store.svg";
import ArrowLongDown from "@assets/icons/arrow-long-down.svg";
import { FilterBar } from "@app/api/core/filter-bar";
import { useEffect } from "react";
import classNames from "classnames";

export interface IFilterBarComponentProps {
  filterBar: FilterBar;
  onBrandChanged: (value: string) => void;
  onCategoryChanged: (value: string) => void;
  onOrderByChanged: (value: string) => void;
  onStatusChanged: (value: string) => void;
}

const FilterBarComponent = (props: IFilterBarComponentProps) => {
  const [filterSort, setfilterSort] = React.useState(false);

  const filterSortChange = (e: any) => {
    setfilterSort(!filterSort);
  };

  return (
    <div className={styles["filter-bar"]}>
      <div className={styles["filter-bar__filter-list"]}>
        <div className={` ${styles["filter-label"]}  ${"uk-visible@m"} `}>
          Filters
          <IconComponent icon={HandPointing} size={"20px"} />
        </div>

        <div className={styles[""]}>
          <DropdownComponent title="Status" buttonVariant="primary-brand" orientation="bottom-left">
            <ul>
              {props.filterBar.status.map((value, key) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
          </DropdownComponent>
        </div>
        <div className={styles[""]}>
          <DropdownComponent title="Categorie" buttonVariant="secondary" orientation="bottom-left">
            <ul>
              {props.filterBar.categories.map((value, key) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
          </DropdownComponent>
        </div>
        <div className={styles[""]}>
          <DropdownComponent title="Merk" buttonVariant="secondary" orientation="bottom-right">
            <SearchFilterControlComponent
              checkbox={props.filterBar.brands}
              onChange={value => props.onBrandChanged(value)}
            />
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
          <span
            role={"button"}
            className={classNames("filter__sort-change", {
              ["isActive"]: filterSort
            })}
            onClick={filterSortChange}
          >
            Relevantie
            <IconComponent icon={ArrowLongDown} size={"6px"} />
          </span>
        </div>
      </div>
    </div>
  );
};

export { FilterBarComponent };
