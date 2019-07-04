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

export interface IFilterBarComponentProps {
  filterBar: FilterBar;
  onBrandChanged: (value: string) => void;
  onCategoryChanged: (value: string) => void;
  onOrderByChanged: (value: string) => void;
  onStatusChanged: (value: string) => void;
}

const FilterBarComponent = (props: IFilterBarComponentProps) => {
  const [filterSort, setfilterSort] = React.useState(false);
  const [prevIcon, setPrevIcon] = React.useState(false);
  const [filterContent, setFilterContent] = React.useState(false);

  const filterSortChange = (e: any) => {
    setfilterSort(!filterSort);
  };
  const handleClickLAbel = () => {
    setFilterContent(!filterContent);
  };
  const handleClick = () => {
    setPrevIcon(!prevIcon);
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
            orientation="bottom-left"
            buttonColor="outline"
          >
            <ul>
              {props.filterBar.status.map((value, key) => (
                <li key={key}>{value}</li>
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
            <ul>
              {props.filterBar.categories.map((value, key) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
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
              onChange={value => props.onBrandChanged(value)}
            />
          </DropdownComponent>
        </div>
      </div>
      <div className={styles["filter-bar__sort"]}>
        <div className={styles["filter__sort-item"]}>
          <span>
            <IconComponent icon={StoreIcon} size={"20px"} />
          </span>
          132 winkels
        </div>
        <div className={styles["filter__sort-item"]}>
          {props.filterBar.sortByFilterTitle}
          <span role={"button"} className={styles["filter__sort-change"]} onClick={filterSortChange}>
            Relevantie
            <span
              className={` ${styles["filter__sort-change-icon"]} ${
                styles[filterSort ? "filter__sort-change-icon-isActive" : ""]
              } `}
            >
              <IconComponent icon={ArrowLongDown} size={"6px"} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export { FilterBarComponent };
