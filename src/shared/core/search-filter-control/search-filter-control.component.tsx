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
  onSelect: (checkbox: Checkbox[]) => void;
}

const SearchFilterControlComponent = (props: ISearchFilterControlComponentProps) => {
  const [checkboxList, setCheckboxList] = React.useState<Checkbox[]>([]);
  const [checkedFilters, setCheckedFilters] = React.useState<number>(0);

  const searchBrand = (value: string) => {
    const list: Checkbox[] = [];
    props.checkbox.map(brand => brand.text.toUpperCase().includes(value.toUpperCase()) && list.push(brand));
    setCheckboxList(list);
  };

  const onSelected = (id: string) => {
    const newSelected = checkboxList.map(option => {
      if (option.text.toUpperCase() === id.toUpperCase()) {
        option.isChecked = !option.isChecked;
      }

      return option;
    });
    setCheckboxList(newSelected);

    props.onSelect(newSelected);
  };

  const countSelectedFilters = () => {
    let i = 0;
    checkboxList.forEach(option => {
      if (option.isChecked === true) {
        i += 1;
      }

      return i;
    });

    setCheckedFilters(i);
  };

  const clearFilters = () => {
    const newSelected = checkboxList.map(option => {
      option.isChecked = false;

      return option;
    });
    setCheckboxList(newSelected);
  };

  useEffect(() => {
    setCheckboxList(props.checkbox);
  }, []);
  useEffect(() => {
    countSelectedFilters();
  }, [checkboxList]);

  return (
    <div className={style["filter-modal"]}>
      <div className={style["filter-modal-head"]}>
        <Input
          placeholder={"search"}
          classModify={"large"}
          icon={Search}
          onChange={event => {
            searchBrand(event);
          }}
        />
      </div>
      <div className={style["filter-modal-body"]}>
        <div className="uk-grid uk-child-width-1-2@s">
          {checkboxList.map((checkbox, key) => (
            <div key={key} className={style["filter-modal-item"]}>
              <CheckboxComponent
                isChecked={checkbox.isChecked && checkbox.isChecked}
                onClick={() => onSelected(checkbox.text)}
              >
                {checkbox.text}
              </CheckboxComponent>
              <span>({checkbox.quantity})</span>
            </div>
          ))}
        </div>
      </div>

      <div className={style["filter-modal-bottom"]}>
        <ul className={style["filter-modal-bottom__action"]}>
          <li>
            <Link to="#" onClick={clearFilters}>
              Verwijder merk filters ({checkedFilters})
            </Link>
          </li>
          <li>
            <Button title={"Toon 123 Winkels"} variant={"primary-brand"} onClick={props.applyFilter} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export { SearchFilterControlComponent };
