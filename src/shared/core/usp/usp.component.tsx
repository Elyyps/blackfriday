import * as React from "react";
import "./usp.component.scss";
import { Link } from "react-router-dom";
import { IconComponent } from "@app/core";
import { USP as USP_CLASS } from "@app/api/core/usp";

interface IUSPProps {
  uspModule: USP_CLASS;
}

const USP = (props: IUSPProps) => (
  <div className="usp">
    {props.uspModule.uniqueSellingPoints.map((item, index) => (
      <div key={index} className="usp__item">
        <Link to={item.link.url} className="usp__link">
          <IconComponent icon={item.icon} size="14px" />
          <span style={{ marginLeft: "10px" }}>{item.link.title}</span>
        </Link>
      </div>
    ))}
  </div>
);

export { USP };
