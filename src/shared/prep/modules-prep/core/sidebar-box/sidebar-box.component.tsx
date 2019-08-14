import * as React from "react";
import "./sidebar-box.component.scss";
import { CardSimple } from "@app/prep/modules-prep/core";

interface ISidebarBoxProps {
  items?: any[];
  title?: string;
}

const SidebarBoxComponent = (props: ISidebarBoxProps) => (
  <div className="sidebar-box">
    <h2 className="sidebar-box__title">{props.title}</h2>
    {props.items && (
      <ul className="sidebar-box__list">
        {props.items.map((link, key) => (
          <li key={key}>
            <CardSimple variant={"small"} {...link} />
          </li>
        ))}
      </ul>
    )}
  </div>
);

export { SidebarBoxComponent };
