import * as React from "react";
import "./usp.component.scss";
import { Link } from "react-router-dom";
import { IconComponent } from "@app/prep/modules-prep/core";
import { TopRightFooterItem } from "@app/api/modules/footer/models/top-right-footer-item";

interface IUSPProps {
  uspModule: TopRightFooterItem[];
}

const USP = (props: IUSPProps) => (
  <div className="usp">
    {props.uspModule.map((item, index) => (
      <div key={index} className="usp__item">
        <Link to={item.text.link} className="usp__link">
          <IconComponent icon={item.icon} size="14px" />
          {item.text.title}
        </Link>
      </div>
    ))}
  </div>
);

export { USP };
