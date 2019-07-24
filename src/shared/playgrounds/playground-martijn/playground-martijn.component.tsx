import * as React from "react";

// import styles from "./playground-martijn-component.module.scss";

import { generateArrowPanelData } from "@app/api/core/arrow-panel/generate-dummy-data";
import { FeaturedCategoriesContainer } from "@app/modules/featured-categories/container";

export interface IPlaygroundMartijnComponentProps {}

const PlaygroundMartijnComponent = (props: IPlaygroundMartijnComponentProps) => (
  <React.Fragment>
    <FeaturedCategoriesContainer categoryItems={generateArrowPanelData()} />
  </React.Fragment>
);

export { PlaygroundMartijnComponent };
