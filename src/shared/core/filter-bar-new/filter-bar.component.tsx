import React from "react";
import styles from "./filter-bar-component.module.scss";
import HandPointing from "@assets/icons/hand-pointing.svg";
import StoreIcon from "@assets/icons/store.svg";
import ArrowLongDown from "@assets/icons/arrow-long-down.svg";
import Filter from "@assets/icons/filter.svg";
import { IconComponent } from "@app/prep/modules-prep/core";
import { CheckboxDropDown } from "../checkbox-dropdown/checkbox-dropdown.component";
import { FilterItem } from "@app/api/core/filter/filter-item";

export interface IFilterBarProps {}

const FilterBar = (props: IFilterBarProps) => {
  const [filterItems, setFilterItems] = React.useState<FilterItem[]>([
    {
      displayName: "item 1",
      isSelected: false,
      totalAmount: 22
    },
    {
      displayName: "item 2",
      isSelected: false,
      totalAmount: 33
    }
  ]);

  const onFilterItemsChanged = (items: FilterItem[]) => {
    setFilterItems([...items]);
  };

  return (
    <div className={styles["filter-bar"]}>
      <div className={styles["filter-bar__filter-list"]}>
        <div className={`${styles["filter-label"]}`}>
          Filters
          <span>
            <IconComponent icon={HandPointing} size={"20px"} />
          </span>
        </div>
        <div
          className={` ${styles["filter-label"]} ${styles["filter-label--mobile"]}  uk-hidden@m`}
          // onClick={handleClickLAbel}
        >
          Filters
          <span>
            <IconComponent icon={Filter} size={"16px"} />
          </span>
        </div>

        <div>
          <CheckboxDropDown title="Status" items={filterItems} onChange={onFilterItemsChanged} />
        </div>
        <div className="uk-visible@m">
          <CheckboxDropDown
            title="Category"
            items={[
              {
                displayName: "item 1",
                isSelected: false,
                totalAmount: 22
              },
              {
                displayName: "item 2",
                isSelected: false,
                totalAmount: 33
              }
            ]}
          />
        </div>
        <div className="uk-visible@m">
          <CheckboxDropDown
            title="Merk"
            items={[
              {
                displayName: "item 1",
                isSelected: false,
                totalAmount: 22
              },
              {
                displayName: "item 2",
                isSelected: false,
                totalAmount: 33
              }
            ]}
          />
        </div>
        <div className="uk-visible@m" style={{ marginLeft: "20px" }}>
          <span
            role="link"
            //  onClick={clearFilters}
            style={{ color: "red", cursor: "pointer" }}
          >
            Verwijder merk filters
          </span>
        </div>
      </div>
      <div className={styles["filter-bar__sort"]}>
        <div className={styles["filter__sort-item"]}>
          <span>
            <IconComponent icon={StoreIcon} size={"20px"} />
          </span>
          55 winkels
        </div>
        <div className={styles["filter__sort-item"]}>
          Sort Title
          <span
            role={"button"}
            className={styles["filter__sort-change"]}
            // onClick={filterSortChange}
          >
            {/* {orderBy} */}
            <span className={` ${styles["filter__sort-change-icon"]}`}>
              <IconComponent icon={ArrowLongDown} size={"6px"} />
            </span>
          </span>
          <ul data-uk-dropdown="mode: click" className={styles["filter__sort-ul"]}>
            {/* {props.filterBar.sortBy.map((value, key) => (
              <li role="link" className={styles["filter__sort-li"]} key={key} onClick={() => onOrderBySelected(value)}>
                {value}
                {value === orderBy && <IconComponent color={"red"} icon={CheckIcon} size={"15px"} />}
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { FilterBar };
