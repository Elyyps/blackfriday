import * as React from "react";
import "./sidebar-box.component.scss";
import { Link } from "react-router-dom";
import { ImageComponent, IconComponent } from "@app/prep/modules-prep/core";
import Arrow from "@assets/icons/chevron-right.svg";

interface ISidebarBoxProps {
  items?: any[];
  title?: string;
}

const SidebarBoxComponent = (props: ISidebarBoxProps) => (
  <div className="sidebar-box">
    <h3 className="sidebar-box__title">{props.title}</h3>
    {props.items && (
      <ul className="sidebar-box__list">
        {props.items.map((link, key) => (
          <li key={key}>
            <Link to={link.link} className="sidebar-box__link">
              <div className="sidebar-box__image">
                <ImageComponent src={link.image} />
              </div>
              {link.title}
              <IconComponent icon={Arrow} size={"5px"} />
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export { SidebarBoxComponent };
