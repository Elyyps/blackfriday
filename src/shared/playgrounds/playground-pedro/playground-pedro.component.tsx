/* tslint:disable */
import * as React from "react";

import { MobileFilterComponent, mobileFilterDummyData } from "@app/core/mobile-filter";
import { IMobileFilterItem } from "@app/core/mobile-filter/mobile-filter-item";
import { StarsRatingComponent } from "@app/core/stars-rating";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = () => {
  return (

    <div style={{ maxWidth: "300px", margin: "auto" }}>
      <StarsRatingComponent showRating voteTrigger={() => alert("voted")} rating={2.5} />
    </div>
  );
};

export { PlaygroundPedroComponent };
