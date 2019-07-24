import * as React from "react";

// import styles from "./playground-martijn-component.module.scss";

import { generateDummyFeaturedCategoriesData } from "@app/api/modules/featured-categories/generate-dummy-data";
import { FeaturedCategoriesContainer } from "@app/modules/featured-categories/container";

export interface IPlaygroundMartijnComponentProps {}

const PlaygroundMartijnComponent = (props: IPlaygroundMartijnComponentProps) => (
  <React.Fragment>
    <FeaturedCategoriesContainer featuredCategoriesModule={generateDummyFeaturedCategoriesData()} />
  </React.Fragment>
);

export { PlaygroundMartijnComponent };
