import * as React from "react";
import styles from "./winkel-single-component.module.scss";
import {
  ProductDetail,
  Cards
} from "@app/prep/pages-prep/winkel-single/dummy-data";
import { FooterComponent, NavBarComponent } from "@app/prep/modules-prep";
import { ProductDetailComponent } from "@app/prep/modules-prep/product-detail";

export interface IWinkelSingleComponentProps {}

const WinkelSingleComponent = (props: IWinkelSingleComponentProps) => (
  <div className={styles["homepage"]}>
    <NavBarComponent />
    <ProductDetailComponent {...ProductDetail} cards={Cards} />
    <FooterComponent />
  </div>
);

export { WinkelSingleComponent };
