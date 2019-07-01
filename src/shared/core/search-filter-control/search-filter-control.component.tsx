import React, { useState, useEffect } from "react";
import style from "./search-filter-control-component.module.scss";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { Link } from "react-router-dom";
import { Checkbox, generateDummyCheckboxArray } from "@app/api/core/checkbox";
import { Button } from "../button";

export interface ISearchFilterControlComponentProps {
  checkbox: Checkbox[];
}

const SearchFilterControlComponent = (
  props: ISearchFilterControlComponentProps
) => {
  const [value, setValue] = React.useState("");
  const [brandList, setBrandList] = React.useState<Checkbox[]>([]);
  const searchBrand = (value: string) => {
    setBrandList([]);
    const list: Checkbox[] = [];
    props.checkbox.map(brand => value === brand.text && list.push(brand));
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
      <div className={style["filter-modal-container"]}>
        <div className={style["filter-modal-head"]}>
          <input
            placeholder={"Merk zoeken"}
            onChange={(event): void => {
              setValue(event.currentTarget.value);
            }}
          />
        </div>
        <div className={style["filter-modal-body"]}>
          <div>
            <ul className={style["filter-modal-list"]}>
              {brandList.map((checkbox, key) => (
                <li key={key}>
                  <CheckboxComponent checkbox={checkbox} onClick={setValue} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={style["filter-modal-bottom"]}>
        <ul className={style["filter-modal-bottom__action"]}>
          <li>
            <Link to="#">Verwijder merk filters (2){value}</Link>
          </li>
          <li>
            <Button
              title={"Toon 123 Winkels"}
              href={"#"}
              variant={"primary-brand"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export { SearchFilterControlComponent };
