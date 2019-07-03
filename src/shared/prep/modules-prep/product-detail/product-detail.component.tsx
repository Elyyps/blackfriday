import * as React from "react";
import "./product-detail-component.scss";
import { HeaderBasicComponent } from "@app/prep/modules-prep/header-basic";
import { ImageComponent } from "@app/prep/modules-prep/core";

export interface IProductDetailComponentComponentProps {
  backButtonText?: string;
  backButtonURL?: string;
  image?: string;
  title?: string;
}

const ProductDetailComponent = (props: IProductDetailComponentComponentProps) => (
  <div className="product-detail">
      <div className="uk-grid">
        <div className="uk-child-width-1-3">
        </div>
        <div className="uk-child-width-2-3">

        </div>
      </div>
  </div>
);

export { ProductDetailComponent };
