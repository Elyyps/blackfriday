import React from "react";
import style from "./search-filter-control-component.module.scss";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { Link } from "react-router-dom";
import { Checkbox } from "@app/api/core/checkbox";
import { Button } from "../button";

export interface IFilterModalComponentProps {
  checkbox: Checkbox[];
}

const FilterModalComponent = (props: IFilterModalComponentProps) => {
  const [value, setValue] = React.useState("");

  return (
    <div className={style["filter-modal"]}>
      <div className={style["filter-modal-container"]}>
        <div className={style["filter-modal-head"]}>
          <input placeholder={"Merk zoeken"} />
        </div>
        <div className={style["filter-modal-body"]}>
          <div>
            <ul className={style["filter-modal-list"]}>
              {props.checkbox.map((checkbox, key) => (
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

export { FilterModalComponent };
