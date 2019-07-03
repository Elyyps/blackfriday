import React, { useState, useEffect } from "react";
import style from "./search-filter-control-component.module.scss";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { Link } from "react-router-dom";
import { Checkbox, generateDummyCheckboxArray } from "@app/api/core/checkbox";
import { Button } from "../button";
import Search from "@assets/icons/search.svg";
import { Input } from "@app/prep/modules-prep/core";

export interface ISearchFilterControlComponentProps {
  checkbox: Checkbox[];
  onChange: (value: string) => void;
}

const SearchFilterControlComponent = (props: ISearchFilterControlComponentProps) => {
  const [value, setValue] = React.useState("");
  const [brandList, setBrandList] = React.useState<Checkbox[]>([]);
  const searchBrand = (value: string) => {
    const list: Checkbox[] = [];
    props.checkbox.map(brand => brand.text.toUpperCase().includes(value.toUpperCase()) && list.push(brand));
    setBrandList(list);
  };
  useEffect(() => {
    if (value.length > 0) {
      searchBrand(value);
    } else {
      setBrandList(props.checkbox);
    }
  }, [value]);

  return (
    <div className={style["filter-modal"]}>
      <div className={style["filter-modal-head"]}>
        <Input
          placeholder={"search"}
          classModify={"large"}
          icon={Search}
          onChange={event => {
            setValue(event);
          }}
        />
      </div>
      <div className={style["filter-modal-body"]}>
        <div className="uk-grid uk-child-width-1-2@s">
          {brandList.map((checkbox, key) => (
            <div key={key} className={style["filter-modal-item"]}>
              <CheckboxComponent checkbox={checkbox} onClick={setValue} />
            </div>
          ))}
        </div>
      </div>

      <div className={style["filter-modal-bottom"]}>
        <ul className={style["filter-modal-bottom__action"]}>
          <li>
            <Link to="#">Verwijder merk filters (2)</Link>
          </li>
          <li>
            <Button title={"Toon 123 Winkels"} variant={"primary-brand"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export { SearchFilterControlComponent };
