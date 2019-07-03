import * as React from "react";
import "./product-detail-component.scss";
import { IconComponent } from "@app/prep/modules-prep/core";
import Star from "@assets/icons/star-filled.svg";

export interface IRatingComponentProps {
  stars: number;
}

const RatingComponent = ({ stars }: IRatingComponentProps) => (
  <div className="rating">
    <ul className="rating__list">
      {[...Array(stars)].map((e, i) => (
        <li key={i}>
          <IconComponent icon={Star} size="14px" />
        </li>
      ))}
    </ul>
    <div className="rating__description">Beoordeel deze deal</div>
  </div>
);

export { RatingComponent };
