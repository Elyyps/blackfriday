import * as React from "react";

// import styles from "./playground-martijn-component.module.scss";

import { FeaturedCategories } from "@app/modules/featured-categories";

import { generateArrowPanelData } from "@app/api/core/arrow-panel/generate-dummy-data";

export interface IPlaygroundMartijnComponentProps {}

const PlaygroundMartijnComponent = (props: IPlaygroundMartijnComponentProps) => (
  <React.Fragment>
    {/* <div style={{ margin: "100px" }}> */}
    <FeaturedCategories categoryItems={generateArrowPanelData()} />
    {/* </div> */}
  </React.Fragment>
);

export { PlaygroundMartijnComponent };
