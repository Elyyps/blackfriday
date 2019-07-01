import * as React from "react";
import "./usp.component.scss";
import { Link } from "react-router-dom";
import { IconComponent } from "@app/prep/modules-prep/core";
import Megaphone from "@assets/icons/megaphone.svg";
import Shop from "@assets/icons/shop.svg";
import Clock from "@assets/icons/clock.svg";

interface IUSPProps {}

const USP = (props: IUSPProps) => (
  <div className="usp">
    <div className="usp__item">
      <Link to="./" className="usp__link">
        <IconComponent icon={Shop} size="14px" />
        Overzicht van álle black friday winkels
      </Link>
    </div>
    <div className="usp__item uk-visible@s">
      <Link to="./" className="usp__link">
        <IconComponent icon={Clock} size="14px" />
        Altijd up-to-date van de laatste deals
      </Link>
    </div>
    <div className="usp__item uk-visible@s">
      <Link to="./" className="usp__link">
        <IconComponent icon={Megaphone} size="14px" />
        Mis niets van Black Friday 2019
      </Link>
    </div>
  </div>
);

export { USP };
