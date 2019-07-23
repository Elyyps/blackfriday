import React from "react";
import styles from "./filter-bar-component.module.scss";
import { DropdownComponent } from "@app/core/dropdown/dropdown.component";
import { SearchFilterControlComponent } from "@app/core/search-filter-control/search-filter-control.component";
import HandPointing from "@assets/icons/hand-pointing.svg";
import StoreIcon from "@assets/icons/store.svg";
import Filter from "@assets/icons/filter.svg";
import { FilterBar } from "@app/api/core/filter-bar/filter-bar";
import Cross from "@assets/icons/cross.svg";
import ChevronLeft from "@assets/icons/chevron-left.svg";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { Checkbox } from "@app/api/core/checkbox";
import { IconComponent } from "@app/prep/modules-prep/core";
import { SelectComponent } from "../select";

export interface IFilterBarComponentProps {
  applyFilter: () => void;
  filterBar: FilterBar;
  onBrandChanged: (value: string[]) => void;
  onCategoryChanged: (value: string[]) => void;
  onOrderByChanged: (value: string) => void;
  onStatusChanged: (value: string[]) => void;
}

const FilterBarComponent = (props: IFilterBarComponentProps) => {
  const [prevIcon, setPrevIcon] = React.useState(false);
  const [filterContent, setFilterContent] = React.useState(false);
  const [checkedStatusFilters, setCheckedStatusFilters] = React.useState<number>(0);
  const [checkedCategoryFilters, setCheckedCategoryFilters] = React.useState<number>(0);
  const [checkedBrandFilters, setCheckedBrandFilters] = React.useState<number>(0);
  const [numberOfShopsFromCategory, setNumberOfShopsFromCategory] = React.useState<number>(0);
  const [numberOfShopsFromStatus, setNumberOfShopsFromStatus] = React.useState<number>(0);
  const [numberOfShopsFromBrands, setNumberOfShopsFromBrands] = React.useState<number>(0);

  const handleClickLAbel = () => {
    setFilterContent(!filterContent);
  };
  const handleClick = () => {
    setPrevIcon(!prevIcon);
  };
  const onOrderBySelected = (value: string) => {};

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
    let total = 0;
    checkbox.forEach(option => {
      if (option.isChecked === true) {
        list.push(option.text.toUpperCase());
        total += option.label ? option.label : 0;
      }
    });
    setNumberOfShopsFromStatus(total);
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

    setNumberOfShopsFromCategory(0);
    setNumberOfShopsFromBrands(0);
    setNumberOfShopsFromStatus(0);
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
          role="button"
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
            <a role="button" className={styles["filter-content-clear"]} onClick={clearFilters}>
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
                  ({checkbox.label})
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
            buttonColor="outline"
          >
            <SearchFilterControlComponent
              placeholder={props.filterBar.categoryFilterPlaceholder}
              checkbox={props.filterBar.categories}
              onSelect={props.onCategoryChanged}
              applyFilter={props.applyFilter}
              getCheckedFilters={setCheckedCategoryFilters}
              numberOfFilters={checkedCategoryFilters}
              getTotalShops={setNumberOfShopsFromCategory}
            />
          </DropdownComponent>
        </div>
        <div className="uk-visible@m">
          <DropdownComponent
            title={props.filterBar.brandFilterTitle}
            buttonVariant="secondary"
            orientation="bottom-left"
            buttonColor="outline"
          >
            <SearchFilterControlComponent
              placeholder={props.filterBar.brandFilterPlaceholder}
              checkbox={props.filterBar.brands}
              onSelect={props.onBrandChanged}
              applyFilter={props.applyFilter}
              getCheckedFilters={setCheckedBrandFilters}
              numberOfFilters={checkedBrandFilters}
              getTotalShops={setNumberOfShopsFromBrands}
            />
          </DropdownComponent>
        </div>
        <div className="uk-visible@m" style={{ marginLeft: "20px" }}>
          <span role="link" onClick={clearFilters} style={{ color: "red", cursor: "pointer" }}>
            Verwijder merk filters ({checkedBrandFilters + checkedCategoryFilters + checkedStatusFilters})
          </span>
        </div>
      </div>
      <div className={styles["filter-bar__sort"]}>
        <div className={styles["filter__sort-counter"]}>
          <span>
            <IconComponent icon={StoreIcon} size={"20px"} />
          </span>
          {numberOfShopsFromBrands + numberOfShopsFromCategory + numberOfShopsFromStatus} winkels
        </div>
        <div className={styles["filter__sort-item"]}>
          {props.filterBar.sortByFilterTitle} :
          <SelectComponent options={props.filterBar.sortBy} onSelect={props.onOrderByChanged} />
        </div>
      </div>
    </div>
  );
};

export { FilterBarComponent };
