import React, { useState } from "react";
import styles from "./filter-bar-component.module.scss";
import HandPointing from "@assets/icons/hand-pointing.svg";
import StoreIcon from "@assets/icons/store.svg";
import ArrowLongDown from "@assets/icons/arrow-long-down.svg";
import Filter from "@assets/icons/filter.svg";
import { IconComponent } from "@app/prep/modules-prep/core";
import { CheckboxDropdown } from "../checkbox-dropdown/checkbox-dropdown.component";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { SearchableCheckboxDropdown } from "../searchable-checkbox-dropdown/searchable-checkbox-dropdown.component";
import { SelectComponent } from "../select";

export interface IFilterBarProps {}

const FilterBar = (props: IFilterBarProps) => {
  const [statusItems, setStatusItems] = useState<FilterItem[]>([
    {
      id: "1",
      displayName: "item 1",
      isSelected: false,
      totalAmount: 22
    },
    {
      id: "2",
      displayName: "item 2",
      isSelected: false,
      totalAmount: 33
    }
  ]);
  const [categoryItems, setCategoryItems] = useState<FilterItem[]>([
    {
      id: "1",
      displayName: "Audio",
      isSelected: false,
      totalAmount: 12
    },
    {
      id: "2",
      displayName: "Sport",
      isSelected: false,
      totalAmount: 20
    },
    {
      id: "3",
      displayName: "Games",
      isSelected: false,
      totalAmount: 9
    },
    {
      id: "4",
      displayName: "Elektronisch",
      isSelected: false,
      totalAmount: 3
    },
    {
      id: "5",
      displayName: "Mode",
      isSelected: false,
      totalAmount: 2
    }
  ]);

  const [brandItems, setBrandItems] = useState<FilterItem[]>([
    {
      id: "1",
      displayName: "Apple",
      isSelected: false,
      totalAmount: 28
    },
    {
      id: "2",
      displayName: "Jack & Jones",
      isSelected: false,
      totalAmount: 1
    },
    {
      id: "3",
      displayName: "Adidas",
      isSelected: false,
      totalAmount: 3
    },
    {
      id: "4",
      displayName: "JBL",
      isSelected: false,
      totalAmount: 8
    },
    {
      id: "5",
      displayName: "Converse",
      isSelected: false,
      totalAmount: 17
    },
    {
      id: "6",
      displayName: "Microsoft",
      isSelected: false,
      totalAmount: 9
    },
    {
      id: "7",
      displayName: "Guess",
      isSelected: false,
      totalAmount: 16
    },
    {
      id: "8",
      displayName: "Only",
      isSelected: false,
      totalAmount: 2
    },
    {
      id: "9",
      displayName: "Happy Socks",
      isSelected: false,
      totalAmount: 28
    },
    {
      id: "10",
      displayName: "Phillips",
      isSelected: false,
      totalAmount: 11
    },
    {
      id: "11",
      displayName: "HP",
      isSelected: false,
      totalAmount: 3
    },
    {
      id: "12",
      displayName: "Nintendo",
      isSelected: false,
      totalAmount: 20
    },
    {
      id: "13",
      displayName: "Samsung",
      isSelected: false,
      totalAmount: 11
    },
    {
      id: "14",
      displayName: "Sony",
      isSelected: false,
      totalAmount: 9
    }
  ]);

  const onStatusFilterItemsChanged = (items: FilterItem[]) => {
    setStatusItems([...items]);
  };

  const onCategoryFilterItemsChanged = (items: FilterItem[]) => {
    setCategoryItems([...items]);
  };

  const onBrandFilterItemsChanged = (items: FilterItem[]) => {
    setBrandItems([...items]);
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
          // onClick={handleClickLabel}
        >
          Filters
          <span>
            <IconComponent icon={Filter} size={"16px"} />
          </span>
        </div>

        <div>
          <CheckboxDropdown title="Status" items={statusItems} onChange={onStatusFilterItemsChanged} />
        </div>
        <div className="uk-visible@m">
          <SearchableCheckboxDropdown
            searchPlaceholder="Merk zoeken"
            deleteFilterLabel="Verwijder merk filters"
            title="Categorieen"
            showFilterName="winkels"
            items={categoryItems}
            onChange={onCategoryFilterItemsChanged}
          />
        </div>
        <div className="uk-visible@m">
          <SearchableCheckboxDropdown
            searchPlaceholder="Merk zoeken"
            deleteFilterLabel="Verwijder merk filters"
            title="Merk"
            showFilterName="merken"
            items={brandItems}
            onChange={onBrandFilterItemsChanged}
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
          <span className={styles["amount-of-shops"]}>
            <IconComponent icon={StoreIcon} size={"20px"} />
          </span>
          132 winkels
        </div>
        <div className={styles["filter__sort-item"]}>
          Sorteer op:
          <span
            role={"button"}
            className={styles["filter__sort-change"]}
            // onClick={filterSortChange}
          >
            {/* {orderBy} */}
            <SelectComponent options={["Relevatie", "Nieuwste", "Prijs"]} onSelect={() => {}} />
          </span>
        </div>
      </div>
    </div>
  );
};

export { FilterBar };
