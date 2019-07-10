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
  checkedFilters: (filters: number) => void;
  numberOfFilters: number;
  onSelect: (checkbox: string[]) => void;
  totalShops: (filters: number) => void;
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
    applyFilter(newSelectedFilters);
  };

  const clearFilters = () => {
    const newSelected = checkboxList.map(option => {
      option.isChecked = false;

      return option;
    });
    props.onSelect([]);

    setCheckboxList(newSelected);
    props.checkedFilters(0);
    props.totalShops(0);
  };
  const applyFilter = (checkbox: Checkbox[]) => {
    const list: string[] = [];

    checkbox.forEach(option => {
      if (option.isChecked === true) {
        list.push(option.text.toUpperCase());
      }
    });
    props.checkedFilters(list.length);
    props.onSelect(list);
  };

  useEffect(() => {
    setCheckboxList(props.checkbox);
  }, [props.checkbox]);

  useEffect(() => {
    // applyFilter(checkboxList);
  }, [checkboxList]);

  return (
    <div className={style["filter-modal"]}>
      <div className={style["filter-modal-head"]}>
        <Input
          placeholder={"search"}
          classModify={"large"}
          icon={Search}
          onChange={event => {
            searchFilter(event);
          }}
        />
      </div>

      <div className={style["filter-modal-body"]}>
        <div className="uk-grid uk-child-width-1-2@s">
          {checkboxList &&
            checkboxList.map((checkbox, key) => (
              <div key={key} className={style["filter-modal-item"]}>
                <CheckboxComponent isChecked={checkbox.isChecked} onClick={() => onSelected(checkbox.text)}>
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
              Verwijder merk filters ({props.numberOfFilters})
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
