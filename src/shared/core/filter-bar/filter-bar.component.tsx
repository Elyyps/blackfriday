import * as React from "react";
import styles from "./filter-bar-component.module.scss";
import { DropdownComponent } from "@app/core/dropdown/dropdown.component";
import { SearchFilterControlComponent } from "@app/core/search-filter-control/search-filter-control.component";
import { IconComponent } from "@app/prep/modules-prep/core";
import HandPointing from "@assets/icons/hand-pointing.svg";
import StoreIcon from "@assets/icons/store.svg";
import ArrowLongDown from "@assets/icons/arrow-long-down.svg";
import Filter from "@assets/icons/filter.svg";
import { FilterBar } from "@app/api/core/filter-bar";
import Cross from "@assets/icons/cross.svg";
import ChevronLeft from "@assets/icons/chevron-left.svg";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { Checkbox } from "@app/api/core/checkbox";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface IFilterBarComponentProps {
  applyFilter: () => void;
  filterBar: FilterBar;
  onBrandChanged: (value: string[]) => void;
  onCategoryChanged: (value: string[]) => void;
  onOrderByChanged: (value: string) => void;
  onStatusChanged: (value: string[]) => void;
}

const FilterBarComponent = (props: IFilterBarComponentProps) => {
  const [filterSort, setfilterSort] = useState(false);
  const [prevIcon, setPrevIcon] = useState(false);
  const [filterContent, setFilterContent] = useState(false);
  const [orderBy, setOrderBy] = useState("Relevant");
  const [checkedStatusFilters, setCheckedStatusFilters] = useState<number>(0);
  const [checkedCategoryFilters, setCheckedCategoryFilters] = useState<number>(0);
  const [checkedBrandFilters, setCheckedBrandFilters] = useState<number>(0);
  const [numberOfShops, setNumberOfShops] = useState<number>(0);

  const filterSortChange = () => {
    setfilterSort(!filterSort);
  };
  const handleClickLAbel = () => {
    setFilterContent(!filterContent);
  };
  const handleClick = () => {
    setPrevIcon(!prevIcon);
  };
  const onOrderBySelected = (value: string) => {
    props.onOrderByChanged(value);
    setOrderBy(value);
  };

  const countNumberOfShops = (value: number) => {
    setNumberOfShops(numberOfShops + value);
  };
  const onStatusSelected = (id: string) => {
    const newSelectedStatus = props.filterBar.status.map(option => {
      if (option.text.toUpperCase() === id.toUpperCase()) {
        option.isChecked = !option.isChecked;
      }

      return option;
    });

    applyStatusFilter(newSelectedStatus);
  };
  const applyStatusFilter = (checkbox: Checkbox[]) => {
    const list: string[] = [];

    checkbox.forEach(option => {
      if (option.isChecked === true) {
        list.push(option.text.toUpperCase());
      }
    });
    setCheckedStatusFilters(list.length);
    props.onStatusChanged(list);
  };

  const clearFilters = () => {
    props.filterBar.categories.map(option => {
      option.isChecked = false;
    });
    props.filterBar.brands.map(option => {
      option.isChecked = false;
    });
    props.filterBar.status.map(option => {
      option.isChecked = false;
    });
    props.onBrandChanged([]);
    props.onCategoryChanged([]);
    props.onStatusChanged([]);

    setCheckedBrandFilters(0);
    setCheckedStatusFilters(0);
    setCheckedCategoryFilters(0);

    setNumberOfShops(0);
  };

  return (
    <div className={styles["filter-bar"]}>
      <div className={styles["filter-bar__filter-list"]}>
        <div className={` ${styles["filter-label"]}  ${"uk-visible@m"} `}>
          Filters
          <span>
            <IconComponent icon={HandPointing} size={"20px"} />
          </span>
        </div>
        <div
          className={` ${styles["filter-label"]} ${styles["filter-label--mobile"]}  uk-hidden@m`}
          onClick={handleClickLAbel}
        >
          Filters
          <span>
            <IconComponent icon={Filter} size={"16px"} />
          </span>
        </div>
        <div className={` ${styles["filter-content"]} ${styles[filterContent ? "filter-content-isActive" : ""]}  `}>
          <div className={` ${styles["filter-content-label"]}  uk-hidden@m`}>
            {prevIcon ? (
              <span role="button" className={styles["arrow-control"]} onClick={handleClick}>
                <IconComponent color={"#fff"} icon={ChevronLeft} size={"7px"} />
              </span>
            ) : (
              <span role="button" className={styles["button-control"]} onClick={handleClickLAbel}>
                <IconComponent color={"#fff"} icon={Cross} size={"12px"} />
              </span>
            )}
            <div>
              Filters
              <span className={styles["filter-content-label-icon"]}>
                <IconComponent icon={HandPointing} size={"16px"} />
              </span>
            </div>
            <a role="button" className={styles["filter-content-clear"]}>
              Wis alle filters
            </a>
          </div>
        </div>
        <div className="uk-visible@m">
          <DropdownComponent
            title={props.filterBar.statusFilterTitle}
            buttonVariant="primary-brand"
            orientation="bottom-right"
            buttonColor="outline"
          >
            <ul className={styles["filter-bar-ul"]}>
              {props.filterBar.status.map((checkbox, key) => (
                <li key={key} className={styles["filter-bar-li"]}>
                  <CheckboxComponent isChecked={checkbox.isChecked} onClick={() => onStatusSelected(checkbox.text)}>
                    {checkbox.text}
                  </CheckboxComponent>
                </li>
              ))}
            </ul>
          </DropdownComponent>
        </div>
        <div className="uk-visible@m">
          <DropdownComponent
            title={props.filterBar.categoryFilterTitle}
            buttonVariant="secondary"
            orientation="bottom-left"
          >
            <SearchFilterControlComponent
              checkbox={props.filterBar.categories}
              onSelect={props.onCategoryChanged}
              applyFilter={props.applyFilter}
              checkedFilters={setCheckedCategoryFilters}
              numberOfFilters={checkedCategoryFilters}
              totalShops={countNumberOfShops}
            />
          </DropdownComponent>
        </div>
        <div className="uk-visible@m">
          <DropdownComponent
            title={props.filterBar.brandFilterTitle}
            buttonVariant="secondary"
            orientation="bottom-left"
          >
            <SearchFilterControlComponent
              checkbox={props.filterBar.brands}
              onSelect={props.onBrandChanged}
              applyFilter={props.applyFilter}
              checkedFilters={setCheckedBrandFilters}
              numberOfFilters={checkedBrandFilters}
              totalShops={countNumberOfShops}
            />
          </DropdownComponent>
        </div>
        <div className="uk-visible@m" style={{ marginLeft: "20px" }}>
          <span onClick={clearFilters} style={{ color: "red", cursor: "pointer" }}>
            Verwijder merk filters ({checkedBrandFilters + checkedCategoryFilters + checkedStatusFilters})
          </span>
        </div>
      </div>
      <div className={styles["filter-bar__sort"]}>
        <div className={styles["filter__sort-item"]}>
          <span>
            <IconComponent icon={StoreIcon} size={"20px"} />
          </span>
          {numberOfShops} winkels
        </div>
        <div className={styles["filter__sort-item"]}>
          {props.filterBar.sortByFilterTitle}
          <span role={"button"} className={styles["filter__sort-change"]} onClick={filterSortChange}>
            {orderBy}
            <span
              className={` ${styles["filter__sort-change-icon"]} ${
                styles[filterSort ? "filter__sort-change-icon-isActive" : ""]
              } `}
            >
              <IconComponent icon={ArrowLongDown} size={"6px"} />
            </span>
          </span>

          <ul data-uk-dropdown="mode: click" className={styles["filter-bar-ul"]}>
            {props.filterBar.sortBy.map((value, key) => (
              <li className={styles["filter-bar-li"]} key={key} onClick={() => onOrderBySelected(value)}>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { FilterBarComponent };
