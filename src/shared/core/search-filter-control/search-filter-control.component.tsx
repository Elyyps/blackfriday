import React, { useState, useEffect } from "react";
import style from "./search-filter-control-component.module.scss";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { Link } from "react-router-dom";
import { Checkbox } from "@app/api/core/checkbox";
import { Button } from "../button";
import Search from "@assets/icons/search.svg";
import { Input } from "@app/prep/modules-prep/core";

export interface ISearchFilterControlComponentProps {
  applyFilter: () => void;
  checkbox: Checkbox[];
  getCheckedFilters: (filters: number) => void;
  getTotalShops: (filters: number) => void;
  numberOfFilters: number;
  onSelect: (checkbox: string[]) => void;
  placeholder?: string;
}

const SearchFilterControlComponent = (props: ISearchFilterControlComponentProps) => {
  const [checkboxList, setCheckboxList] = useState<Checkbox[]>([]);

  const searchFilter = (value: string) => {
    const list: Checkbox[] = [];
    value
      ? (checkboxList.map(brand => brand.text.toUpperCase().includes(value.toUpperCase()) && list.push(brand)),
        setCheckboxList(list))
      : setCheckboxList(props.checkbox);
  };

  const onSelected = (text: string) => {
    const newSelectedFilters = checkboxList.map(option => {
      if (option.text.toUpperCase() === text.toUpperCase()) {
        option.isChecked = !option.isChecked;
      }

      return option;
    });

    setCheckboxList(newSelectedFilters);
    filterData(newSelectedFilters);
  };

  const clearFilters = () => {
    const newSelected = checkboxList.map(option => {
      option.isChecked = false;

      return option;
    });
    props.onSelect([]);

    setCheckboxList(newSelected);
    props.getCheckedFilters(0);
    props.getTotalShops(0);
  };
  const filterData = (checkbox: Checkbox[]) => {
    const list: string[] = [];
    let total = 0;
    checkbox.forEach(option => {
      if (option.isChecked === true) {
        list.push(option.text.toUpperCase());
        total += option.label ? option.label : 0;
      }
    });
    props.getTotalShops(total);
    props.getCheckedFilters(list.length);
    props.onSelect(list);
  };

  const applyFilter = () => {
    props.applyFilter();
  };

  useEffect(() => {
    setCheckboxList(props.checkbox);
  }, [props.checkbox]);

  return (
    <div className={style["filter-control"]}>
      <div className={style["filter-control-head"]}>
        <Input
          placeholder={props.placeholder && props.placeholder}
          classModify={"large"}
          icon={Search}
          onChange={(event: any) => {
            searchFilter(event);
          }}
        />
      </div>

      <div className={style["filter-control-body"]}>
        <div className="uk-grid uk-child-width-1-2@s">
          {checkboxList &&
            checkboxList.map((checkbox, key) => (
              <div key={key} className={style["filter-control-item"]}>
                <CheckboxComponent isChecked={checkbox.isChecked} onClick={() => onSelected(checkbox.text)}>
                  {checkbox.text}
                </CheckboxComponent>
                ({checkbox.label})
              </div>
            ))}
        </div>
      </div>

      <div className={style["filter-control-bottom"]}>
        <ul className={style["filter-control-bottom__action"]}>
          <li>
            <Link to="#" onClick={clearFilters}>
              Verwijder merk filters ({props.numberOfFilters})
            </Link>
          </li>
          <li>
            <Button title={"Toon 123 Winkels"} variant={"primary-brand"} onClick={applyFilter} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export { SearchFilterControlComponent };
